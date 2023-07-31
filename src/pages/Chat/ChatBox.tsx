import { FormEvent, ChangeEvent, useState, useRef, useEffect } from 'react';
import { Button, Box, Grid, Stack, TextField, Avatar, Typography, CircularProgress } from "@mui/material";
import { grey } from "@mui/material/colors";
import { OpenAIApi, Configuration, ChatCompletionRequestMessage } from 'openai';
import { toast } from 'react-toastify';

//  ---------------------------------------------------------------------------------------------------

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

//  ---------------------------------------------------------------------------------------------------

export default function ChatBox() {
  const chatBoxRef = useRef<HTMLDivElement | null>(null)

  const [question, setQuestion] = useState<string>('')
  const [chats, setChats] = useState<Array<ChatCompletionRequestMessage>>([])
  const [gptIsLoading, setGptIsLoading] = useState<boolean>(false)

  //  Send request to ChatGPT
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const _chats = [...chats];
    _chats.push({
      role: 'user',
      content: question
    })

    setChats(_chats)

    setGptIsLoading(true)

    openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: _chats,
    }).then(res => {
      if (res.data.choices[0].message) {
        _chats.push(res.data.choices[0].message)
        setChats(_chats)
      }
      setQuestion('')
      setGptIsLoading(false)
    })
      .catch(error => {
        console.log('>>>>>>>>> error => ', error)
        setQuestion('')
        setGptIsLoading(false)
        toast.error('Chat engine occured error. Try again.')
      })
  }

  //  Move scroll to the down automatically
  useEffect(() => {
    const lastChildElement = chatBoxRef.current?.lastElementChild
    if (lastChildElement) {
      lastChildElement?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chats])

  return (
    <Stack flexGrow={1} sx={{ height: '100%', bgcolor: grey[900] }}>
      {/* Chatbox */}
      <Stack flexGrow={1} spacing={2} px={3} pt={3} sx={{ overflowY: 'auto', height: '100px' }} ref={chatBoxRef}>
        {chats.map((chat, index) => (
          <Stack direction="row" spacing={1} key={index}>
            {chat.role !== 'user' ? (
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
              {chat.content}
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