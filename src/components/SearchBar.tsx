import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SearchBar() {
    return (
        <>
            <Container className="mt-4">
                <Form>
                    <Row>
                        <Col lg="1">
                            Projet
                        </Col>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Ville, quartier, code postal"
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Type de bien (appartement, maison, etc.)"

                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="Prix minimum"

                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="Prix maximum"

                            />
                        </Col>
                        <Col>
                            <Button variant="primary">
                                Rechercher
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}

export default SearchBar;
