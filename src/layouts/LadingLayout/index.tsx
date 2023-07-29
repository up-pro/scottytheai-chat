import { lazy } from "react"
import { Outlet } from "react-router-dom"
import { Stack, useMediaQuery, useTheme } from "@mui/material"

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
      <Stack flexGrow={1}>
        <Outlet />
      </Stack>
      {isMobile ? <MBFooter /> : <DPFooter />}
    </Stack >
  )
}