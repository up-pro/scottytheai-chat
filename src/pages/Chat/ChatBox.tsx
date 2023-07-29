import { FormEvent, ChangeEvent, useState, useRef, useEffect } from 'react';
import { Button, Box, Grid, Stack, TextField, Avatar, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { IChat } from '../../utils/interfaces';

export default function ChatBox() {
  const chatBoxRef = useRef<HTMLDivElement | null>(null)

  const [question, setQuestion] = useState<string>('')
  const [chats, setChats] = useState<Array<IChat>>([])
  const [gptIsLoading] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newChat: IChat = {
      id: chats.length,
      sender: 'user',
      message: question
    }

    if (!gptIsLoading) {
      setChats([...chats, newChat])
    }
  }

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
        {chats.map(chat => (
          <Stack direction="row" spacing={1} key={chat.id}>
            {chat.sender === 'gpt' ? (
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
              {chat.message}
            </Typography>
          </Stack>
        ))}
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