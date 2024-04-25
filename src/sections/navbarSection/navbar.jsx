
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Trello from "../../assets/Trello_logo.svg.png"
import style from "./navbar.module.css";


function NavbarSection() {
  return (
    <>
      <Navbar  className="navbar navbar-expand-lg navbar-light bg-light py-3" >
        <Container>
          <Navbar.Brand href="#home"> <img className={`${style.logo} me-4`} src={Trello} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={`${style.listItemHover} ${style.listItem} me-3`} href="#link">Features</Nav.Link>
              <Nav.Link className={`${style.listItemHover} ${style.listItem} me-3`} href="#link">Solition</Nav.Link>
              <Nav.Link className={`${style.listItemHover} ${style.listItem} me-3`} href="#link">Plan</Nav.Link>
              <Nav.Link className={`${style.listItemHover} ${style.listItem} me-3`} href="#link">Pricing</Nav.Link>
              <Nav.Link className={`${style.listItemHover} ${style.listItem} me-3`} href="#link">Resource</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
                <div>
                  <a className={`${style.logIn} ${style.logInHover} me-4`}>Log in</a>
                  <a ><button className=" btn btn-primary" >Get Trello for free</button></a>
                  
                </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarSection;
