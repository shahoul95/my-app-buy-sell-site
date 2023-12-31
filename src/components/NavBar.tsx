import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import hearthFill from '../assets/image/heart-fill.svg'
import profileFill from '../assets/image/person-fill.svg'
import search from '../assets/image/search.svg'
import orpi from '../assets/image/orpi.svg'

function NavBar() {
    return (
        <>
            <Navbar className="mt-4" expand="lg">
                <Navbar.Brand href="#home">
                    <Image src={orpi} height="80"></Image>
                </Navbar.Brand>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link className='m-3' style={{ fontSize: 14 }} as={NavLink} to="/buy">
                            Acheter
                        </Nav.Link>
                        <Nav.Link className='m-3' style={{ fontSize: 14 }} as={NavLink} to="/contact">
                            Gestion
                        </Nav.Link>
                        <Nav.Link className='m-3' style={{ fontSize: 14 }} as={NavLink} to="/contact">
                            Notre agence
                        </Nav.Link>
                        <Nav.Link className='m-3' style={{ fontSize: 14 }} as={NavLink} to="/contact">
                            Investisseur
                        </Nav.Link>
                        <Nav.Link className='m-3' style={{ fontSize: 14 }} as={NavLink} to="/contact">
                            Entreprise
                        </Nav.Link>
                        <Nav.Link className='m-3' style={{ fontSize: 14 }} as={NavLink} to="/contact">
                            Contact
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex m-2">
                        <Form.Control
                            style={{ borderBottomLeftRadius: 20, borderTopLeftRadius: 20, borderTop: 10, borderRight: 10, borderLeft: 10, borderBottomRightRadius: 0 }}
                            type="search"
                            placeholder="Rechercher..."
                            className="border-radius pr-0"
                            aria-label="Search"
                        />
                        <Button style={{ borderRadius: 30, backgroundColor: '#53D5BB', border: 0, fontSize: 12, }}>
                            <Image src={search} height="20"></Image>
                        </Button>
                    </Form>
                    <Image className="m-2" height="20" src={hearthFill}></Image>
                    <Image className="m-2" height="20" src={profileFill}></Image>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
