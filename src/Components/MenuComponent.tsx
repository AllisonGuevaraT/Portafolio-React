import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MenuComponent() {
    return (<div>
        <Navbar expand="lg" className=" justify-content-end"  bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to={'/'}> TechNova Solutions</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto justify-content-end">
                        <Nav.Link as={Link} to={'/beneficios'}>Beneficios</Nav.Link>
                        <Nav.Link as={Link} to={'/tecnologias'}>Tecnologías</Nav.Link>
                        <Nav.Link as={Link} to={'/contacto'}>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    );
}

export default MenuComponent;