import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import orpi from '../assets/image/orpi.svg'

function Footer() {
    return (
        <footer className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <Container className='me-5 d-none d-lg-block justify-content-center'>
                  
                </Container>
            </section>

            <section className='py-5'>
                <Container className='text-center text-md-start mt-5'>
                    <Row className='mt-3'>
                        <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <Image src={orpi} height="200"></Image>
                        </Col>

                        <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Acheter
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Louer
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Gestion
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Notre agence
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Contact
                                </a>
                            </p>
                        </Col>

                        <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Estimer
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Investisseur
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Entreprise
                                </a>
                            </p>

                        </Col>
                        <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Nos honoraires
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Mentions légales
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Contact
                                </a>
                            </p>

                            <p>
                                Nous contacter au mardi au samedi
                                <br></br>
                                9h30-12h30 / 14h-19h
                            </p>
                        </Col>
                        <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <p>

                                Téléphone: 01 64 27 83 34
                            </p>
                            <p>

                                DES RECLAMATIONS
                            </p>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" className="rounded-input" placeholder="Votre e-mail*" />
                                    <FloatingLabel controlId="floatingTextarea2" label="Comments" className="mt-3">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '100px' }}
                                        />
                                    </FloatingLabel>
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
