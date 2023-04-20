import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Container, Nav } from 'react-bootstrap';


const NavBar = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">OA CatShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#alimentos">Alimentos y snacks</Nav.Link>
              <Nav.Link href="#juguetes">Juguetes</Nav.Link>
              <Nav.Link href="#gyms">Cat Gyms</Nav.Link>
              <Nav.Link href="#accesorios">Accesorios</Nav.Link>
              <Nav.Link href="#higiene">Higiene</Nav.Link>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar