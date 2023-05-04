import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Container, Nav } from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom'


const NavBar = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src="img/brandslim.JPG" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to={'/category/alimentos'} className="NavLinkStyle">Alimentos y snacks</NavLink>
              <NavLink to={'/category/juguetes'} className="NavLinkStyle">Juguetes</NavLink>
              <NavLink to={'/category/gym'} className="NavLinkStyle">Cat Gyms</NavLink>
              <NavLink to={'/category/higiene'} className="NavLinkStyle">Higiene</NavLink>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar

//Componente barra de navegación
//Utilización de bootstrap
//Utilización de Navink para navegar entre categorías a distintas rutas
