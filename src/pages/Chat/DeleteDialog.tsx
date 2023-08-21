import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import api from "../../utils/api";
import { IChatHistory } from "../../utils/interfaces";
import useLoading from "../../hooks/useLoading";

//  -----------------------------------------------------------------------------------------

interface IProps {
  opened: boolean;
  setOpened: (_opened: boolean) => void;
  currentChatHistory: IChatHistory | null;
  chatHistories: Array<IChatHistory>;
  setChatHistories: (_chatHistories: Array<IChatHistory>) => void;
}

//  -----------------------------------------------------------------------------------------

export default function DeleteDialog({ opened, setOpened, currentChatHistory, chatHistories, setChatHistories }: IProps) {
  const { openLoadingAct, closeLoadingAct } = useLoading()

  const closeDialog = () => {
    setOpened(false)
  }

  const deleteChatHistory = () => {
    openLoadingAct()
    api.delete(`/delete-history/${currentChatHistory?.id}`)
      .then(() => {
        const _chatHistories = [...chatHistories]
        const indexOfDeleteChatHistory = _chatHistories.findIndex(_chatHistory => _chatHistory.id === currentChatHistory?.id)
        _chatHistories.splice(indexOfDeleteChatHistory, 1)
        setChatHistories(_chatHistories)
        closeDialog()
        closeLoadingAct()
      })
      .catch(error => {
        console.log('>>>>>>>>>>> error of deleteChatHistory => ', error)
        closeLoadingAct()
      })
  }

  return (
    <Dialog open={opened} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogTitle>
        Delete a chat?
      </DialogTitle>
      <DialogContent>
        <Typography fontSize={18}>
          This will delete <Typography component="span" fontWeight={900}>{currentChatHistory?.title}</Typography>.
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