import { Link } from "react-router-dom";
import { Add, Comment, Telegram, Twitter } from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography, useTheme, Link as MuiLink } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useAccount } from "wagmi";
import ChatBox from "./ChatBox";

export default function Chat() {
  const theme = useTheme()
  const { address } = useAccount()

  return (
    <Box my={4} mx={4} display={{ xs: 'none', lg: 'block' }}>
      <Grid container spacing={2}>
        <Grid item md={3}></Grid>
        <Grid item md={9}>
          <Stack direction="row" mb={1} justifyContent="start">
            <Stack direction="row">
              <Stack height={40} px={2} justifyContent="center" bgcolor={theme.palette.primary.main}>
                <Button component={Link} to="/">Chat</Button>
              </Stack>
              <Box
                width={0}
                height={0}
                sx={{
                  borderBottom: `40px solid ${theme.palette.primary.main}`,
                  borderRight: '20px solid transparent'
                }}
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {/* Left sidebar */}
        <Grid item md={3}>
          <Box p={4} border={`1px solid ${theme.palette.primary.main}`} borderRadius={5}>
            <Stack position="relative" direction="row" justifyContent="center">
              <Box
                component="img"
                src="/assets/images/group_curves.svg"
                sx={{ width: '90%' }}
              />
              <Stack position="absolute" width="100%" height="100%" justifyContent="center" alignItems="center">
                <Stack spacing={2}>
                  <Stack direction="row" justifyContent="center" spacing={2}>
                    <Typography component="span" fontSize={14} color={grey[100]}>11100100</Typography>
                    <Typography component="span" fontSize={14} color={grey[100]}>11100100</Typography>
                    <Typography component="span" fontSize={14} color={grey[100]}>11100100</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="center" spacing={2}>
                    <Typography component="span" fontSize={14} color={grey[100]}>11100100</Typography>
                    <Typography component="span" fontSize={14} color={grey[100]}>11100100</Typography>
                    <Typography component="span" fontSize={14} color={grey[100]}>11100100</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="center" spacing={2}>
                    <Typography component="span" fontSize={14} color={grey[100]}>11100100</Typography>
                    <Typography component="span" fontSize={14} color={grey[100]}>11100100</Typography>
                    <Typography component="span" fontSize={14} color={grey[100]}>11100100</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="center" spacing={2}>
                    <Typography component="span" fontSize={14} color={grey[100]}>11100100</Typography>
                    <Typography component="span" fontSize={14} color={grey[100]}>11100100</Typography>
                    <Typography component="span" fontSize={14} color={grey[100]}>11100100</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>

            <Stack spacing={4} width="100%" mt={8}>
              <Button
                variant="contained"
                sx={{ borderRadius: 9999, border: '2px solid black' }}
              >Chat With Scotty</Button>

              <Stack spacing={1}>
                <Typography component="span" color={grey[100]} fontSize={18}>Contract address</Typography>
                <Box bgcolor={grey[900]} px={2} py={1.5} borderRadius={1}>
                  <Typography component="span" color={grey[100]} fontSize={18} sx={{ wordBreak: 'break-all' }}>
                    {address}
                  </Typography>
                </Box>
              </Stack>

              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: grey[900], width: '100%' }}
                      startIcon={<Twitter sx={{ color: theme.palette.primary.main }} />}
                      component={MuiLink}
                      href="#"
                      target="_blank"
                    >Twitter</Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: grey[900], width: '100%' }}
                      startIcon={<Telegram sx={{ color: theme.palette.primary.main }} />}
                      component={MuiLink}
                      href="#"
                      target="_blank"
                    >Telegram</Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: grey[900], width: '100%' }}
                      startIcon={<Box component="img" src="/assets/images/scotty.png" />}
                      component={MuiLink}
                      href="#"
                      target="_blank"
                    >Scotty AI</Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: grey[900], width: '100%' }}
                      startIcon={<Box component="img" src="/assets/images/uniswap.png" />}
                      component={MuiLink}
                      href="#"
                      target="_blank"
                    >Uniswap</Button>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Box>
        </Grid>

        <Grid item md={9}>
          <Box height="100%">
            <Grid container height="100%" columnSpacing={2}>
              <Grid item md={9}>
                <ChatBox />
              </Grid>

              <Grid item md={3}>
                <Stack spacing={2} height="100%">
                  <Button
                    variant="contained"
                    sx={{ bgcolor: grey[900] }}
                    startIcon={<Add />}
                  >New Chat</Button>

                  <Stack spacing={2} position="relative" flexGrow={1} height="100px" overflow="auto">
                    <Stack spacing={1}>
                      <Typography component="h5" color={grey[500]}>Today</Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Comment sx={{ color: grey[100], fontSize: 18 }} />
                        <Typography component="p" color={grey[100]} fontSize={14}>
                          Hello.Hello.Hello.Hello.Hello.Hello.
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography component="h5" color={grey[500]}>Today</Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Comment sx={{ color: grey[100], fontSize: 18 }} />
                        <Typography component="p" color={grey[100]} fontSize={14}>
                          Hello.Hello.Hello.Hello.Hello.Hello.
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography component="h5" color={grey[500]}>Today</Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Comment sx={{ color: grey[100], fontSize: 18 }} />
                        <Typography component="p" color={grey[100]} fontSize={14}>
                          Hello.Hello.Hello.Hello.Hello.Hello.
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography component="h5" color={grey[500]}>Today</Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Comment sx={{ color: grey[100], fontSize: 18 }} />
                        <Typography component="p" color={grey[100]} fontSize={14}>
                          Hello.Hello.Hello.Hello.Hello.Hello.
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography component="h5" color={grey[500]}>Today</Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Comment sx={{ color: grey[100], fontSize: 18 }} />
                        <Typography component="p" color={grey[100]} fontSize={14}>
                          Hello.Hello.Hello.Hello.Hello.Hello.
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography component="h5" color={grey[500]}>Today</Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Comment sx={{ color: grey[100], fontSize: 18 }} />
                        <Typography component="p" color={grey[100]} fontSize={14}>
                          Hello.Hello.Hello.Hello.Hello.Hello.
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography component="h5" color={grey[500]}>Today</Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Comment sx={{ color: grey[100], fontSize: 18 }} />
                        <Typography component="p" color={grey[100]} fontSize={14}>
                          Hello.Hello.Hello.Hello.Hello.Hello.
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography component="h5" color={grey[500]}>Today</Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Comment sx={{ color: grey[100], fontSize: 18 }} />
                        <Typography component="p" color={grey[100]} fontSize={14}>
                          Hello.Hello.Hello.Hello.Hello.Hello.
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography component="h5" color={grey[500]}>Today</Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Comment sx={{ color: grey[100], fontSize: 18 }} />
                        <Typography component="p" color={grey[100]} fontSize={14}>
                          Hello.Hello.Hello.Hello.Hello.Hello.
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography component="h5" color={grey[500]}>Today</Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Comment sx={{ color: grey[100], fontSize: 18 }} />
                        <Typography component="p" color={grey[100]} fontSize={14}>
                          Hello.Hello.Hello.Hello.Hello.Hello.
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography component="h5" color={grey[500]}>Today</Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Comment sx={{ color: grey[100], fontSize: 18 }} />
                        <Typography component="p" color={grey[100]} fontSize={14}>
                          Hello.Hello.Hello.Hello.Hello.Hello.
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography component="h5" color={grey[500]}>Today</Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Comment sx={{ color: grey[100], fontSize: 18 }} />
                        <Typography component="p" color={grey[100]} fontSize={14}>
                          Hello.Hello.Hello.Hello.Hello.Hello.
                        </Typography>
                      </Stack>
                    </Stack>

                    <Box
                      position="absolute"
                      top={0}
                      right={0}
                      height="100%"
                      width="100%"
                      sx={{
                        backgroundImage: `linear-gradient(to right, rgba(255,0,0,0), rgba(17, 17, 17, 1))`
                      }}
                    />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}