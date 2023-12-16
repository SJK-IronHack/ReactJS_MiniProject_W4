import menu from "../assets/menu-icon.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "../styles/navbar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar className={classes.navbar}>
        <Container className={classes.navbarContainer}>
          <Navbar.Brand href="#home">iBnB</Navbar.Brand>
          <div className={classes.links}>
          <Link to={`./`} className={classes.NavLink}>
            <p>Home</p>
          </Link>
          <Link to={`/`} className={classes.NavLink}>
            <p>Listings</p>
          </Link>
          <Link to={`/`} className={classes.NavLink}>
            <p>Add Listing</p>
          </Link>
          <Link to={`/`} className={classes.NavLink}>
            <p>About Us</p>
          </Link>
          </div>
      
          <Nav className="me-auto">
          </Nav>
          <img src={menu} alt="Rental menu" height={30} width={30} />

        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
