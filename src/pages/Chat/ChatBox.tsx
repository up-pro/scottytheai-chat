import { FormEvent, ChangeEvent, useState } from 'react';
import { Button, Box, Grid, Stack, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
// import { IChat } from '../../utils/interfaces';

export default function ChatBox() {
  const [question, setQuestion] = useState<string>('')
  // const [chats, setChats] = useState<Array<IChat>>([])
  // const [gptIsLoading, setGptIsLoading] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('>>>>>>> question => ', question)
  }

  return (
    <>
      <Stack flexGrow={1} spacing={1}>

      </Stack>

      {/* Controller */}
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="center">
          <Button sx={{ bgcolor: grey[800], borderRadius: 9999, px: 4 }}>Refetch</Button>
        </Stack>
        <Box sx={{ px: 3 }} component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={10}>
              <TextField
                fullWidth
                size="small"
                value={question}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value)}
              />
            </Grid>
            <Grid item md={2}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
              >Send</Button>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  )
}