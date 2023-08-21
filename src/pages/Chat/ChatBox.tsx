import { FormEvent, ChangeEvent, useState, useRef, useEffect } from 'react';
import { Button, Box, Grid, Stack, TextField, Avatar, Typography, CircularProgress } from "@mui/material";
import { grey } from "@mui/material/colors";
import { OpenAIApi, Configuration, ChatCompletionRequestMessage } from 'openai';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';
import * as _ from 'lodash';
import api from '../../utils/api';
import { IChatHistoriesByDates } from '../../utils/interfaces';

//  ---------------------------------------------------------------------------------------------------

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

//  ---------------------------------------------------------------------------------------------------

interface IProps {
  messages: Array<ChatCompletionRequestMessage>;
  currentChatHistoryId: number;
  chatHistoriesByDates: IChatHistoriesByDates;
  setMessages: (_messages: Array<ChatCompletionRequestMessage>) => void;
  setChatHistoriesByDates: (_chatHistoriesByDates: IChatHistoriesByDates) => void;
  setDates: (_dates: Array<string>) => void;
  setCurrentChatHistoryId: (id: number) => void;
}

//  ---------------------------------------------------------------------------------------------------

export default function ChatBox({ messages, setMessages, chatHistoriesByDates, setChatHistoriesByDates, setDates, currentChatHistoryId, setCurrentChatHistoryId }: IProps) {
  const { address } = useAccount()

  const chatBoxRef = useRef<HTMLDivElement | null>(null)

  const [question, setQuestion] = useState<string>('')
  const [gptIsLoading, setGptIsLoading] = useState<boolean>(false)

  //  Send request to ChatGPT
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      if (question) {
        e.preventDefault()

        const _messages = [...messages];
        _messages.push({
          role: 'user',
          content: question
        })

        setMessages(_messages)
        setQuestion('')
        setGptIsLoading(true)

        //  Create chat history if user's wallet is connected and this is the first message
        if (_messages.length === 1 && !!(address)) {
          const { chatHistories, createdChatHistoryId } = (await api.post('/create-history', {
            title: _messages[0].content,
            creatorWalletAddress: address,
            messages: _messages
          })).data
          console.log('>>>>>>>>> createdChatHistoryId => ', createdChatHistoryId)

          const groupByResult = _.groupBy(chatHistories, _.iteratee('updated_date'))
          const _dates = Object.keys(groupByResult)
          setDates(_dates)
          setChatHistoriesByDates(groupByResult)
          setCurrentChatHistoryId(createdChatHistoryId)
        }

        const chatCompletion = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: _messages,
        })

        if (chatCompletion.data.choices[0].message) {
          _messages.push(chatCompletion.data.choices[0].message)
          await api.post('/save-messages', {
            chatHistoryId: currentChatHistoryId,
            messages: _messages
          })
          const chatHistories = _.flatMap(chatHistoriesByDates);
          const chatHistory = chatHistories.find(_chatHistory => _chatHistory.id === currentChatHistoryId)
          if (chatHistory) {
            chatHistory.messages = JSON.stringify(_messages)
          }
          setMessages(_messages)
        }
        setGptIsLoading(false)
      }
    } catch (error) {
      console.log('>>>>>>>>>>> error of handleSubmit => ', error)
      setGptIsLoading(false)
      toast.error('Chat engine occured error. Try again.')
    }
  }

  //  Move scroll to the down automatically
  useEffect(() => {
    const lastChildElement = chatBoxRef.current?.lastElementChild
    if (lastChildElement) {
      lastChildElement?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages])

  return (
    <Stack flexGrow={1} sx={{ height: '100%', bgcolor: grey[900] }}>
      {/* Chatbox */}
      <Stack flexGrow={1} spacing={2} px={3} pt={3} sx={{ overflowY: 'auto', height: '100px' }} ref={chatBoxRef}>
        {messages.map((message, index) => (
          <Stack direction="row" spacing={1} key={index}>
            {message.role !== 'user' ? (
              <Avatar
                src="/assets/images/gpt.png"
                alt="GPT"
              />
            ) : (
              <Avatar
                src="/assets/images/user.png"
                alt="User"
              />
            )}
            <Typography component="p" color={grey[100]} fontSize={18}>
              {message.content}
            </Typography>
          </Stack>
        ))}
        {gptIsLoading && (
          <Stack direction="row" spacing={1}>
            <Avatar
              src="/assets/images/gpt.png"
              alt="GPT"
            />
            <CircularProgress />
          </Stack>
        )}
      </Stack>

      {/* Input */}
      <Stack spacing={2} pb={3}>
        <Stack direction="row" justifyContent="center">
          <Button sx={{ bgcolor: grey[800], borderRadius: 9999, px: 4 }}>Refetch</Button>
        </Stack>
        <Box px={{ xs: 2, md: 3 }} component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={9} md={10}>
              <TextField
                fullWidth
                size="small"
                value={question}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value)}
              />
            </Grid>
            <Grid item xs={3} md={2}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
              >Send</Button>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Stack>
  )
}