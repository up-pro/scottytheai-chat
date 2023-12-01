import { ChangeEvent } from "react";
import {
  Add,
  Check,
  Close,
  Comment,
  Delete,
  Edit,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
  Link as MuiLink,
  TextField,
} from "@mui/material";
import { grey } from "@mui/material/colors";
// import { CONTRACT_ADDRESS } from "../../utils/constants";
import useMobileMenu from "../../hooks/useMobileMenu";
import { IChatHistoriesByDates, IChatHistory } from "../../utils/interfaces";

//  ------------------------------------------------------------------------------------------------------------

interface IProps {
  dates: Array<string>;
  chatHistoriesByDates: IChatHistoriesByDates | null;
  currentChatHistory: IChatHistory | null;
  titleEditable: boolean;
  setTitleEditable: (_titleEditable: boolean) => void;
  updateTitle: () => void;
  title: string;
  setTitle: (_title: string) => void;
  setDeleteDialogOpened: (opened: boolean) => void;
  setCurrentChatHistory: (chatHistory: IChatHistory | null) => void;
}

//  ------------------------------------------------------------------------------------------------------------

export default function MenuDialog({
  dates,
  chatHistoriesByDates,
  currentChatHistory,
  titleEditable,
  setTitleEditable,
  updateTitle,
  title,
  setTitle,
  setDeleteDialogOpened,
  setCurrentChatHistory,
}: IProps) {
  const theme = useTheme();
  const { menuOpened, closeMenuAct } = useMobileMenu();

  //  Handle the title of input
  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  //  Set the status of the title of current chat
  const handleTitleEditable = (_titleEditable: boolean, title: string) => {
    setTitleEditable(_titleEditable);
    setTitle(title);
  };

  const createNewChat = () => {
    setCurrentChatHistory(null);
    closeMenuAct();
  };

  return (
    <Dialog fullScreen open={menuOpened} onClose={closeMenuAct}>
      <DialogTitle sx={{ px: 0, bgcolor: "#111111" }}>
        <Stack direction="row" justifyContent="center" position="relative">
          <Box
            component="img"
            src="/assets/images/logo.svg"
            alt="logo"
            width="70%"
          />
          <IconButton
            sx={{ position: "absolute", right: 0 }}
            onClick={closeMenuAct}
          >
            <Close />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent sx={{ bgcolor: "#111111" }}>
        <Stack spacing={2}>
          {/* Contract address */}
          {/* <Stack spacing={1}>
            <Typography component="span" color={grey[100]} fontSize={18}>Contract address</Typography>
            <Box bgcolor={grey[900]} px={2} py={1.5} borderRadius={1}>
              <Typography component="span" color={grey[100]} fontSize={18} sx={{ wordBreak: 'break-all' }}>
                {CONTRACT_ADDRESS}
              </Typography>
            </Box>
          </Stack> */}

          {/* Social profiles */}
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: grey[900], width: "100%" }}
                  startIcon={
                    <Twitter sx={{ color: theme.palette.primary.main }} />
                  }
                  component={MuiLink}
                  href="#"
                  target="_blank"
                >
                  Twitter
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: grey[900], width: "100%" }}
                  startIcon={
                    <Telegram sx={{ color: theme.palette.primary.main }} />
                  }
                  component={MuiLink}
                  href="#"
                  target="_blank"
                >
                  Telegram
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: grey[900], width: "100%" }}
                  startIcon={
                    <Box component="img" src="/assets/images/scotty.png" />
                  }
                  component={MuiLink}
                  href="#"
                  target="_blank"
                >
                  Scotty AI
                </Button>
              </Grid>
              {/* <Grid item xs={6}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: grey[900], width: '100%' }}
                  startIcon={<Box component="img" src="/assets/images/uniswap.png" />}
                  component={MuiLink}
                  href="#"
                  target="_blank"
                >Uniswap</Button>
              </Grid> */}
            </Grid>
          </Box>

          {/* Chatbox list */}
          <Stack spacing={2} height="100%">
            <Button
              variant="contained"
              sx={{ bgcolor: grey[900] }}
              startIcon={<Add />}
              onClick={createNewChat}
            >
              New Chat
            </Button>

            <Stack spacing={2} position="relative" flexGrow={1}>
              {dates.map((date) => (
                <Stack spacing={1} key={date}>
                  <Typography component="h5" color={grey[500]}>
                    {date}
                  </Typography>
                  {chatHistoriesByDates &&
                    chatHistoriesByDates[date].map(
                      (chatHistoryByDate, index) => (
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                          key={index}
                        >
                          {currentChatHistory?.id === chatHistoryByDate.id ? (
                            <>
                              <Stack
                                direction="row"
                                spacing={1}
                                sx={{ cursor: "pointer" }}
                              >
                                <Comment
                                  sx={{
                                    color: grey[100],
                                    fontSize: 18,
                                    mt: 0.7,
                                  }}
                                />
                                {titleEditable ? (
                                  <TextField
                                    size="small"
                                    InputProps={{
                                      endAdornment: (
                                        <Stack
                                          direction="row"
                                          alignItems="center"
                                        >
                                          <Check
                                            sx={{
                                              fontSize: 18,
                                              cursor: "pointer",
                                            }}
                                            onClick={() => updateTitle()}
                                          />
                                          <Close
                                            sx={{
                                              fontSize: 18,
                                              cursor: "pointer",
                                            }}
                                            onClick={() =>
                                              handleTitleEditable(false, "")
                                            }
                                          />
                                        </Stack>
                                      ),
                                    }}
                                    inputProps={{
                                      style: {
                                        fontSize: 18,
                                      },
                                    }}
                                    value={title}
                                    onChange={handleTitle}
                                  />
                                ) : (
                                  <Typography
                                    component="p"
                                    color={grey[100]}
                                    fontSize={18}
                                  >
                                    {chatHistoryByDate.title}
                                  </Typography>
                                )}
                              </Stack>

                              <Stack direction="row" alignItems="center">
                                <IconButton
                                  onClick={() =>
                                    handleTitleEditable(
                                      true,
                                      chatHistoryByDate.title
                                    )
                                  }
                                >
                                  <Edit sx={{ fontSize: 18 }} />
                                </IconButton>
                                <IconButton
                                  onClick={() => setDeleteDialogOpened(true)}
                                >
                                  <Delete sx={{ fontSize: 18 }} />
                                </IconButton>
                              </Stack>
                            </>
                          ) : (
                            <Stack
                              direction="row"
                              spacing={1}
                              sx={{ cursor: "pointer" }}
                              onClick={() =>
                                setCurrentChatHistory(chatHistoryByDate)
                              }
                            >
                              <Comment
                                sx={{ color: grey[100], fontSize: 18, mt: 0.7 }}
                              />
                              <Typography
                                component="p"
                                color={grey[100]}
                                fontSize={18}
                              >
                                {chatHistoryByDate.title}
                              </Typography>
                            </Stack>
                          )}
                        </Stack>
                      )
                    )}
                </Stack>
              ))}

              {/* <Box
                position="absolute"
                top={0}
                right={0}
                height="100%"
                width="30%"
                sx={{
                  backgroundImage: `linear-gradient(to right, rgba(17, 17, 17, 0.5), rgba(17, 17, 17, 1))`
                }}
              /> */}
            </Stack>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
