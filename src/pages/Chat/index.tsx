import { Telegram, Twitter } from "@mui/icons-material";
import { Box, Button, Grid, Link, Stack, Typography, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useAccount } from "wagmi";
import ChatBox from "./ChatBox";

export default function Chat() {
  const theme = useTheme()
  const { address } = useAccount()

  return (
    <Box px={4}>
      <Grid container>
        {/* Right sidebar */}
        <Grid
          item
          md={3}
          sx={{
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: 5,
            p: 6
          }}
        >
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
                    component={Link}
                    href="#"
                    target="_blank"
                  >Twitter</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: grey[900], width: '100%' }}
                    startIcon={<Telegram sx={{ color: theme.palette.primary.main }} />}
                    component={Link}
                    href="#"
                    target="_blank"
                  >Telegram</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: grey[900], width: '100%' }}
                    startIcon={<Box component="img" src="/assets/images/scotty.png" />}
                    component={Link}
                    href="#"
                    target="_blank"
                  >Scotty AI</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: grey[900], width: '100%' }}
                    startIcon={<Box component="img" src="/assets/images/uniswap.png" />}
                    component={Link}
                    href="#"
                    target="_blank"
                  >Uniswap</Button>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Grid>

        <Grid item md={9}>
          <Box px={3} height="100%">
            <Grid container height="100%">
              {/* Chatbox */}
              <Grid
                item
                md={9}
                sx={{
                  bgcolor: grey[900],
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  py: 3,
                  gap: 3
                }}
              >
                <ChatBox />
              </Grid>

              {/* Left sidebar */}
              <Grid item md={3}></Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}