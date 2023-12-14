import menu from "../assets/menu-icon.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "../styles/navbar.module.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className={classes.navbar}>
        <Container>
          <Navbar.Brand href="#home">Bearbnb</Navbar.Brand>
          <Nav className="me-auto"></Nav>
          <img src={menu} alt="Rental menu" height={30} width={30} />
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
