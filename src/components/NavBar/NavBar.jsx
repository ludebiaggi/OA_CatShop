import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Container, Nav } from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom'


const NavBar = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">OA CatShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to={'/category/alimentos'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Alimentos y snacks</NavLink>
              <NavLink to={'/category/juguetes'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Juguetes</NavLink>
              <NavLink to={'/category/gym'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cat Gyms</NavLink>
              <NavLink to={'/category/higiene'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Higiene</NavLink>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar