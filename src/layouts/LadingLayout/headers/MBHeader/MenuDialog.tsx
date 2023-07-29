import { Add, Close, Comment, Telegram, Twitter } from "@mui/icons-material";
import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, IconButton, Stack, Typography, useTheme, Link as MuiLink } from "@mui/material";
import { grey } from "@mui/material/colors";
import { CONTRACT_ADDRESS } from "../../../../utils/constants";

//  ------------------------------------------------------------------------------------------------------------

interface IProps {
  open: boolean;
  onClose: () => void;
}

//  ------------------------------------------------------------------------------------------------------------

export default function MenuDialog({ open, onClose }: IProps) {
  const theme = useTheme()

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
    >
      <DialogTitle sx={{ px: 0, bgcolor: '#111111' }}>
        <Stack direction="row" justifyContent="center" position="relative">
          <Box
            component="img"
            src="/assets/images/logo.svg"
            alt="logo"
            width="70%"
          />
          <IconButton
            sx={{ position: 'absolute', right: 0 }}
            onClick={onClose}
          >
            <Close />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent sx={{ bgcolor: '#111111' }}>
        <Stack spacing={2}>
          {/* Contract address */}
          <Stack spacing={1}>
            <Typography component="span" color={grey[100]} fontSize={18}>Contract address</Typography>
            <Box bgcolor={grey[900]} px={2} py={1.5} borderRadius={1}>
              <Typography component="span" color={grey[100]} fontSize={18} sx={{ wordBreak: 'break-all' }}>
                {CONTRACT_ADDRESS}
              </Typography>
            </Box>
          </Stack>

          {/* Social profiles */}
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: grey[900], width: '100%' }}
                  startIcon={<Twitter sx={{ color: theme.palette.primary.main }} />}
                  component={MuiLink}
                  href="#"
                  target="_blank"
                >Twitter</Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: grey[900], width: '100%' }}
                  startIcon={<Telegram sx={{ color: theme.palette.primary.main }} />}
                  component={MuiLink}
                  href="#"
                  target="_blank"
                >Telegram</Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: grey[900], width: '100%' }}
                  startIcon={<Box component="img" src="/assets/images/scotty.png" />}
                  component={MuiLink}
                  href="#"
                  target="_blank"
                >Scotty AI</Button>
              </Grid>
              <Grid item xs={6}>
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

          {/* Chatbox list */}
          <Stack spacing={2} height="100%">
            <Button
              variant="contained"
              sx={{ bgcolor: grey[900] }}
              startIcon={<Add />}
            >New Chat</Button>

            <Stack spacing={2} position="relative" flexGrow={1}>
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
                width="30%"
                sx={{
                  backgroundImage: `linear-gradient(to right, rgba(17, 17, 17, 0.5), rgba(17, 17, 17, 1))`
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}