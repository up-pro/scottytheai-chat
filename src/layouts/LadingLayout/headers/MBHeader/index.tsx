import { useState } from "react";
import { Menu } from "@mui/icons-material";
import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import MenuDialog from "./MenuDialog";

export default function MBHeader() {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)

  const openMenu = () => {
    setMenuOpened(true)
  }

  const closeMenu = () => {
    setMenuOpened(false)
  }

  return (
    <>
      <AppBar position="static" sx={{ py: 1 }}>
        <Toolbar sx={{ position: "relative" }}>
          <Container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src="/assets/images/logo.svg"
              alt="logo"
              width="70%"
            />
          </Container>
          <IconButton
            sx={{ position: 'absolute', right: '3%' }}
            onClick={openMenu}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      <MenuDialog
        open={menuOpened}
        onClose={closeMenu}
      />
    </>
  )
}