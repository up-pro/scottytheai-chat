import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import * as _ from 'lodash';
import api from "../../utils/api";
import { IChatHistoriesByDates } from "../../utils/interfaces";

interface IProps {
  opened: boolean;
  setOpened: (_opened: boolean) => void;
  id: number;
  title: string;
  chatHistoriesByDates: IChatHistoriesByDates;
}

export default function DeleteDialog({ opened, setOpened, id, title, chatHistoriesByDates }: IProps) {
  const closeDialog = () => {
    setOpened(false)
  }

  const deleteChatHistory = () => {
    api.delete(`/delete-history/${id}`)
      .then(() => {
        const chatHistories = _.flatMap(chatHistoriesByDates);
        const indexOfDeleteChatHistory = chatHistories.findIndex(_chatHistory => _chatHistory.id === id)
        chatHistories.splice(indexOfDeleteChatHistory, 1)
      })
      .catch(error => {
        console.log('>>>>>>>>>>> error of deleteChatHistory => ', error)
      })
  }

  return (
    <Dialog open={opened} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogTitle>
        Delete a chat?
      </DialogTitle>
      <DialogContent>
        <Typography>
          This will delete <Typography component="b">{title}</Typography>.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={closeDialog}
        >Cancel</Button>
        <Button
          variant="contained"
          onClick={deleteChatHistory}
        >Delete</Button>
      </DialogActions>
    </Dialog>
  )
}