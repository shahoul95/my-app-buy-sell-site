import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { InputGroup } from 'react-bootstrap';
import search from '../assets/image/search.svg'
import Image from 'react-bootstrap/Image';

function SearchBar() {
    return (
        <>
            <Container className="mt-4">
                <Form>
                    <Row>
                        <Col className='p-0'>
                            <Form.Control
                                style={{ borderBottomLeftRadius: 20, borderTopLeftRadius: 20, borderTop: 10, borderRight: 10, borderLeft: 10, borderBottomRightRadius: 0 }}
                                type="text"
                                placeholder="Type de bien"
                                className='pr-0 shadow-sm  bg-white'
                            />
                        </Col>
                        <Col className='p-0'>
                            <Form.Control
                                style={{ borderTop: 10, borderRight: 10, borderLeft: 10, borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
                                type="text"
                                placeholder="Localisation"
                                className='pr-0 shadow-sm  bg-white'

                            />
                        </Col>
                        <Col className='p-0'>
                            <Form.Control
                                style={{ borderTop: 10, borderRight: 10, borderLeft: 10, borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
                                type="text"
                                placeholder="Prix min/max"
                                className='pr-0 shadow-sm  bg-white'
                            />
                        </Col>
                        <Col className='p-0'>
                            <Form.Control
                                style={{ borderTop: 10, borderRight: 10, borderLeft: 10, borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
                                type="text"
                                placeholder="Surface"
                                className='pr-0 shadow-sm  bg-white'
                            />
                        </Col>
                        <Col className='p-0'>
                            <Form.Control
                                style={{ borderTop: 10, borderRight: 10, borderLeft: 10, borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
                                type="text"
                                placeholder="Pièces"
                                className='pr-0 shadow-sm  bg-white'
                            />
                        </Col>
                        <Col className='p-0'>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    style={{ borderTop: 10, borderRight: 10, borderLeft: 10, borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
                                    placeholder="+ de critéres"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    className='pr-0 shadow-sm  bg-white'
                                />
                                <Button style={{ borderRadius: 30, backgroundColor: '#394460', border: 0, fontSize: 12 }}>
                                    <Image src={search} height="20"></Image>
                                    Rechercher
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}

export default SearchBar;
