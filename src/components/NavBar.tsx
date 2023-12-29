import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <Navbar className='m-3'>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/buy">
                            Acheter
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">
                            Gestion
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">
                            Notre agence
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">
                            Investisseur
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">
                            Entreprise
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">
                            Contact
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex m-2">
                        <Form.Control
                            type="search"
                            placeholder="Rechercher..."
                            className="border-radius"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
