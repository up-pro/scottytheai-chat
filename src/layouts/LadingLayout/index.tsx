import { lazy } from "react"
import { Outlet } from "react-router-dom"
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material"
// import { grey } from "@mui/material/colors"

// -------------------------------------------------------------------------------------------

const DPHeader = lazy(() => import('./headers/DPHeader'))
const MBHeader = lazy(() => import('./headers/MBHeader'))
const DPFooter = lazy(() => import('./footers/DPFooter'))
const MBFooter = lazy(() => import('./footers/MBFooter'))

// -------------------------------------------------------------------------------------------

export default function LandingLayout() {
  const theme = useTheme()
  // const { pathname } = useLocation()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Stack sx={{ minHeight: '100vh' }} bgcolor={theme.palette.background.default}>
      {isMobile ? <MBHeader /> : <DPHeader />}
      <Box flexGrow={1} py={{ xs: 4, md: 4 }}>
        {/* <Container>
          <Stack direction="row" mb={1} justifyContent="start">
            <Stack direction="row">
              <Stack height={40} px={2} justifyContent="center" bgcolor={pathname === '/' ? theme.palette.primary.main : grey[800]}>
                <Button component={Link} to="/">Chat</Button>
              </Stack>
              <Box
                width={0}
                height={0}
                sx={{
                  borderBottom: `40px solid ${pathname === '/' ? theme.palette.primary.main : grey[800]}`,
                  borderRight: '20px solid transparent'
                }}
              />
            </Stack>
          </Stack>
          <Outlet />
        </Container> */}
        <Outlet />
      </Box>
      {isMobile ? <MBFooter /> : <DPFooter />}
    </Stack >
  )
}