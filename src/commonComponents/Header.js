import { Box, Button, ButtonGroup } from "@mui/material";
import { Container } from "@mui/material";
import "./header.css";

function Header({ content }) {
  const { title, buttons, bgColor } = content;
  return (
    <Box className="header_box" style={{ backgroundColorL: { bgColor } }}>
      <Container className="header_container">
        <Button className="main_button"> {title} </Button>
        <ButtonGroup size="large" aria-label="large button group">
          <Button className="navigation_button"> {buttons.b1.title} </Button>
          <Button className="navigation_button"> {buttons.b2.title} </Button>
          <Button className="navigation_button"> {buttons.b3.title} </Button>
          <Button className="navigation_button"> {buttons.b4.title} </Button>
          <Button className="navigation_button"> {buttons.b5.title} </Button>
          <Button className="navigation_button"> {buttons.b6.title} </Button>
        </ButtonGroup>
      </Container>
    </Box>
  );
}
export default Header;
