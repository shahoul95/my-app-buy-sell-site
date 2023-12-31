import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import orpi from '../assets/image/orpi.svg'
import { Link } from 'react-router-dom';
import enveloppeWhite from '../assets/image/email-envelope.svg'
import { Button, InputGroup } from 'react-bootstrap';
import linkedin from '../assets/image/linkedin.svg'
import facebook from '../assets/image/facebook.svg'
import instagram from '../assets/image/instagram.svg'

function Footer() {
    return (
        <footer className='text-center text-lg-start text-muted mt-5'>
            <Container style={{ backgroundColor: '#53D5BB' }} className='d-none d-lg-block justify-content-center' fluid>
                <div className="d-flex justify-content-around">
                    <div className="p-2" style={{ backgroundColor: '#F5C36D' }}>
                        <Image src={enveloppeWhite} className="p-2" height="40"></Image>
                    </div>
                    <Form className="d-flex align-items-center">
                        <Form.Label className='text-white p-2' style={{ fontSize: 14 }}>NEWSLETTER</Form.Label>
                        <InputGroup>
                            <Form.Control
                                style={{ borderTopLeftRadius: 30, borderBottomLeftRadius: 30, border: 0 }}
                                placeholder="Votre e-mail*"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className='p-2'
                            />
                            <Button style={{ fontSize: 14, backgroundColor: '#53D5BB', borderColor: "white", borderTopRightRadius: 30, borderBottomRightRadius: 30 }} id="button-addon2">
                                Suivez-nous
                            </Button>
                        </InputGroup>
                    </Form>
                    <div className="p-2" style={{ backgroundColor: '#F5C36D' }}>
                        <Image src={linkedin} className="p-2" height="40"></Image>
                        <Image src={facebook} className="p-2" height="40"></Image>
                        <Image src={instagram} className="p-2" height="40"></Image>
                    </div>
                </div>
            </Container>

            <section className='py-5'>
                <Container className='text-center text-md-start mt-5'>
                    <Row className='mt-3'>
                        <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <Image src={orpi} height="200"></Image>
                        </Col>
                        <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <p>
                                <Link to="/buy" className='fw-bold text-dark text-decoration-none ' style={{ fontSize: 14 }}>
                                    Acheter
                                </Link>
                            </p>
                            <p>
                                <Link to="/" className='fw-bold text-dark text-decoration-none ' style={{ fontSize: 14 }}>
                                    Louer
                                </Link>
                            </p>
                            <p>
                                <Link to="/" className='fw-bold text-dark text-decoration-none ' style={{ fontSize: 14 }}>
                                    Gestion
                                </Link>
                            </p>
                            <p>
                                <Link to="/" className='fw-bold text-dark text-decoration-none ' style={{ fontSize: 14 }}>
                                    Notre agence
                                </Link>
                            </p>
                            <p>
                                <Link to="/" className='fw-bold text-dark text-decoration-none ' style={{ fontSize: 14 }}>
                                    Contact
                                </Link>
                            </p>
                        </Col>
                        <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <p>
                                <Link to="/" className='fw-bold text-dark text-decoration-none ' style={{ fontSize: 14 }}>
                                    Estimer
                                </Link>
                            </p>
                            <p>
                                <Link to="/" className='fw-bold text-dark text-decoration-none ' style={{ fontSize: 14 }}>
                                    Investisseur
                                </Link>
                            </p>
                            <p>
                                <Link to="/" className='fw-bold text-dark text-decoration-none ' style={{ fontSize: 14 }}>
                                    Entreprise
                                </Link>
                            </p>

                        </Col>
                        <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <p>
                                <Link to="/" className='fw-bold text-dark text-decoration-none ' style={{ fontSize: 14 }}>
                                    Nos honoraires
                                </Link>
                            </p>
                            <p>
                                <Link to="/" className='fw-bold text-dark text-decoration-none ' style={{ fontSize: 14 }}>
                                    Mentions légales
                                </Link>
                            </p>
                            <p>
                                <Link to="/" className='fw-bold text-dark text-decoration-none ' style={{ fontSize: 14 }}>
                                    Contact
                                </Link>
                            </p>

                            <p style={{ fontSize: 14 }}>
                                Nous contacter au mardi au samedi
                                <br></br>
                                9h30-12h30 / 14h-19h
                            </p>
                        </Col>
                        <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <p style={{ fontSize: 12 }}>

                                Téléphone: 01 64 27 83 34
                            </p>
                            <p style={{ fontSize: 14 }} className='fw-bold text-dark '>

                                DES RCLAMATIONS ?
                            </p>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control style={{ borderRadius: 30, borderColor: '#53D5BB' }} type="text" className="rounded-input" placeholder="Votre e-mail*" />
                                    <FloatingLabel controlId="floatingTextarea2" label="Commentaire" className="mt-3">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '100px', borderRadius: 30, borderColor: '#53D5BB' }}
                                        />
                                    </FloatingLabel>
                                    <div className='text-center mt-5'>
                                        <Button style={{ backgroundColor: '#53D5BB', border: 0, borderRadius: 30 }}> ENVOYER</Button>
                                    </div>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </footer>
    );
}

export default Footer;
