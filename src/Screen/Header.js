import { Box, Button, ButtonGroup } from "@mui/material";
import { Container } from "@mui/material";
import "./header.css";

function Header() {
  return (
    <Box className="header_box">
      <Container className="header_container">
        <Button className="main_button"> Art Works </Button>
        <ButtonGroup size="large" aria-label="large button group">
          <Button className="navigation_button"> Home </Button>
          <Button className="navigation_button"> About-Us </Button>
        </ButtonGroup>
      </Container>
    </Box>
  );
}
export default Header;
