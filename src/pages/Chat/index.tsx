import { ChangeEvent, useEffect, useState, useMemo, lazy } from "react";
import { Link } from "react-router-dom";
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
  Grid,
  Stack,
  Typography,
  useTheme,
  Link as MuiLink,
  IconButton,
  TextField,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";
import * as _ from "lodash";
import { ChatCompletionRequestMessage } from "openai";
import ChatBox from "./ChatBox";
import api from "../../utils/api";
import { IChatHistoriesByDates, IChatHistory } from "../../utils/interfaces";
import { isChatHistoriesByDates } from "../../utils/functions";
import MenuDialog from "./MenuDialog";

//  -----------------------------------------------------------------------------------------------------------

const DeleteDialog = lazy(() => import("./DeleteDialog"));

//  -----------------------------------------------------------------------------------------------------------

export default function Chat() {
  const theme = useTheme();
  const { address } = useAccount();

  const [chatHistories, setChatHistories] = useState<Array<IChatHistory>>([]);
  const [messages, setMessages] = useState<Array<ChatCompletionRequestMessage>>(
    []
  );
  const [currentChatHistory, setCurrentChatHistory] =
    useState<IChatHistory | null>(null);
  const [titleEditable, setTitleEditable] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [deleteDialogOpened, setDeleteDialogOpened] = useState<boolean>(false);

  const chatHistoriesByDates = useMemo<IChatHistoriesByDates | null>(() => {
    const groupByResult = _.groupBy(chatHistories, _.iteratee("updated_date"));
    if (isChatHistoriesByDates(groupByResult)) {
      return groupByResult;
    } else {
      return null;
    }
  }, [chatHistories]);

  const dates = useMemo<Array<string>>(() => {
    if (chatHistoriesByDates) {
      return Object.keys(chatHistoriesByDates);
    }
    return [];
  }, [chatHistoriesByDates]);

  //  Get histories of the current user
  const getChatHistories = () => {
    api
      .get(`/get-histories/${address}`)
      .then((res) => {
        setChatHistories(res.data);
      })
      .catch(() => {
        toast.error("Getting chat histories have been failed.");
      });
  };

  //  Set the status of the title of current chat
  const handleTitleEditable = (_titleEditable: boolean, title: string) => {
    setTitleEditable(_titleEditable);
    setTitle(title);
  };

  //  Handle the title of input
  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  //  Update title of a chat history
  const updateTitle = () => {
    api.put(`/update-title/${currentChatHistory?.id}`, { title }).then(() => {
      const chatHistory = chatHistories.find(
        (_chatHistory) => _chatHistory.id === currentChatHistory?.id
      );
      if (chatHistory) {
        chatHistory.title = title;
      }
      handleTitleEditable(false, "");
    });
  };

  const createNewChat = () => {
    setCurrentChatHistory(null);
  };

  useEffect(() => {
    if (address) {
      getChatHistories();
    } else {
      setChatHistories([]);
    }
  }, [address]);

  useEffect(() => {
    if (currentChatHistory) {
      setMessages(JSON.parse(currentChatHistory.messages));
    } else {
      setMessages([]);
    }
  }, [currentChatHistory]);

  return (
    <>
      {/* Desktop */}
      <Box my={4} mx={4} display={{ xs: "none", lg: "block" }}>
        <Grid container spacing={2}>
          <Grid item md={3}></Grid>
          <Grid item md={9}>
            <Stack direction="row" mb={1} justifyContent="start">
              <Stack direction="row">
                <Stack
                  height={40}
                  px={2}
                  justifyContent="center"
                  bgcolor={theme.palette.primary.main}
                >
                  <Button component={Link} to="/">
                    Chat
                  </Button>
                </Stack>
                <Box
                  width={0}
                  height={0}
                  sx={{
                    borderBottom: `40px solid ${theme.palette.primary.main}`,
                    borderRight: "20px solid transparent",
                  }}
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {/* Left sidebar */}
          <Grid item md={3}>
            <Box
              p={4}
              border={`1px solid ${theme.palette.primary.main}`}
              borderRadius={5}
            >
              <Stack
                position="relative"
                direction="row"
                justifyContent="center"
              >
                <Box
                  component="img"
                  src="/assets/images/group_curves.svg"
                  sx={{ width: "90%" }}
                />
                <Stack
                  position="absolute"
                  width="100%"
                  height="100%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Stack spacing={2}>
                    <Stack direction="row" justifyContent="center" spacing={2}>
                      <Typography
                        component="span"
                        fontSize={18}
                        color={grey[100]}
                      >
                        11100100
                      </Typography>
                      <Typography
                        component="span"
                        fontSize={18}
                        color={grey[100]}
                      >
                        11100100
                      </Typography>
                      <Typography
                        component="span"
                        fontSize={18}
                        color={grey[100]}
                      >
                        11100100
                      </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="center" spacing={2}>
                      <Typography
                        component="span"
                        fontSize={18}
                        color={grey[100]}
                      >
                        11100100
                      </Typography>
                      <Typography
                        component="span"
                        fontSize={18}
                        color={grey[100]}
                      >
                        11100100
                      </Typography>
                      <Typography
                        component="span"
                        fontSize={18}
                        color={grey[100]}
                      >
                        11100100
                      </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="center" spacing={2}>
                      <Typography
                        component="span"
                        fontSize={18}
                        color={grey[100]}
                      >
                        11100100
                      </Typography>
                      <Typography
                        component="span"
                        fontSize={18}
                        color={grey[100]}
                      >
                        11100100
                      </Typography>
                      <Typography
                        component="span"
                        fontSize={18}
                        color={grey[100]}
                      >
                        11100100
                      </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="center" spacing={2}>
                      <Typography
                        component="span"
                        fontSize={18}
                        color={grey[100]}
                      >
                        11100100
                      </Typography>
                      <Typography
                        component="span"
                        fontSize={18}
                        color={grey[100]}
                      >
                        11100100
                      </Typography>
                      <Typography
                        component="span"
                        fontSize={18}
                        color={grey[100]}
                      >
                        11100100
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>

              <Stack spacing={4} width="100%" mt={8}>
                <Button
                  variant="contained"
                  sx={{ borderRadius: 9999, border: "2px solid black" }}
                >
                  Chat With Scotty
                </Button>

                <Stack spacing={1}>
                  <Typography component="span" color={grey[100]} fontSize={18}>
                    Contract address
                  </Typography>
                  <Box bgcolor={grey[900]} px={2} py={1.5} borderRadius={1}>
                    <Typography
                      component="span"
                      color={grey[100]}
                      fontSize={18}
                      sx={{ wordBreak: "break-all" }}
                    >
                      {address}
                    </Typography>
                  </Box>
                </Stack>

                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
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
                    <Grid item xs={12} md={6}>
                      <Button
                        variant="contained"
                        sx={{ bgcolor: grey[900], width: "100%" }}
                        startIcon={
                          <Telegram
                            sx={{ color: theme.palette.primary.main }}
                          />
                        }
                        component={MuiLink}
                        href="#"
                        target="_blank"
                      >
                        Telegram
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Button
                        variant="contained"
                        sx={{ bgcolor: grey[900], width: "100%" }}
                        startIcon={
                          <Box
                            component="img"
                            src="/assets/images/scotty.png"
                          />
                        }
                        component={MuiLink}
                        href="#"
                        target="_blank"
                      >
                        Scotty AI
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Button
                        variant="contained"
                        sx={{ bgcolor: grey[900], width: "100%" }}
                        startIcon={
                          <Box
                            component="img"
                            src="/assets/images/uniswap.png"
                          />
                        }
                        component={MuiLink}
                        href="#"
                        target="_blank"
                      >
                        Uniswap
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid item md={9}>
            <Box height="100%">
              <Grid container height="100%" columnSpacing={2}>
                {/* Chatbox */}
                <Grid item md={9}>
                  <ChatBox
                    messages={messages}
                    setMessages={setMessages}
                    currentChatHistory={currentChatHistory}
                    setCurrentChatHistory={setCurrentChatHistory}
                    chatHistories={chatHistories}
                    setChatHistories={setChatHistories}
                  />
                </Grid>

                {/* Right sidebar */}
                <Grid item md={3}>
                  <Stack spacing={2} height="100%">
                    <Button
                      variant="contained"
                      sx={{ bgcolor: grey[900] }}
                      startIcon={<Add />}
                      onClick={createNewChat}
                    >
                      New Chat
                    </Button>

                    <Stack
                      spacing={2}
                      position="relative"
                      flexGrow={1}
                      height="100px"
                      sx={{ overflowY: "auto", overflowX: "hidden" }}
                    >
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
                                  {currentChatHistory?.id ===
                                  chatHistoryByDate.id ? (
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
                                                    onClick={() =>
                                                      updateTitle()
                                                    }
                                                  />
                                                  <Close
                                                    sx={{
                                                      fontSize: 18,
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      handleTitleEditable(
                                                        false,
                                                        ""
                                                      )
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

                                      <Stack
                                        direction="row"
                                        alignItems="center"
                                      >
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
                                          onClick={() =>
                                            setDeleteDialogOpened(true)
                                          }
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
                                        sx={{
                                          color: grey[100],
                                          fontSize: 18,
                                          mt: 0.7,
                                        }}
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
                        height="auto"
                        width="20%"
                        sx={{
                          backgroundImage: `linear-gradient(to right, rgba(17, 17, 17, 0.5), rgba(17, 17, 17, 1))`
                        }}
                      /> */}
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Mobile */}
      <Stack
        flexGrow={1}
        py={2}
        px={1}
        display={{ xs: "flex", lg: "none" }}
        height="100%"
        spacing={1}
      >
        <Stack direction="row">
          <Stack
            height={40}
            px={2}
            justifyContent="center"
            bgcolor={theme.palette.primary.main}
          >
            <Button component={Link} to="/">
              Chat
            </Button>
          </Stack>

          <Box
            width={0}
            height={0}
            sx={{
              borderBottom: `40px solid ${theme.palette.primary.main}`,
              borderRight: "20px solid transparent",
            }}
          />
        </Stack>

        <Stack flexGrow={1}>
          <ChatBox
            messages={messages}
            setMessages={setMessages}
            currentChatHistory={currentChatHistory}
            setCurrentChatHistory={setCurrentChatHistory}
            chatHistories={chatHistories}
            setChatHistories={setChatHistories}
          />
        </Stack>
      </Stack>
      <DeleteDialog
        opened={deleteDialogOpened}
        setOpened={setDeleteDialogOpened}
        currentChatHistory={currentChatHistory}
        setCurrentChatHistory={setCurrentChatHistory}
        chatHistories={chatHistories}
        setChatHistories={setChatHistories}
      />
      <MenuDialog
        dates={dates}
        currentChatHistory={currentChatHistory}
        setCurrentChatHistory={setCurrentChatHistory}
        chatHistoriesByDates={chatHistoriesByDates}
        titleEditable={titleEditable}
        setTitleEditable={setTitleEditable}
        setDeleteDialogOpened={setDeleteDialogOpened}
        updateTitle={updateTitle}
        setTitle={setTitle}
        title={title}
      />
    </>
  );
}
