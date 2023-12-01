import { Menu } from "@mui/icons-material";
import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import useMobileMenu from "../../../../hooks/useMobileMenu";

export default function MBHeader() {
  const { openMenuAct } = useMobileMenu();

  return (
    <>
      <AppBar position="static" sx={{ py: 1 }}>
        <Toolbar sx={{ position: "relative" }}>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src="/assets/images/logo.svg"
              alt="logo"
              width="70%"
            />
          </Container>
          <IconButton
            sx={{ position: "absolute", right: "3%" }}
            onClick={() => openMenuAct()}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
