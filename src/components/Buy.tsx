import { buyHomeDetails } from '../buy-home'
import Image from 'react-bootstrap/Image';
import CardHouseBuy from './CardHouseBuy'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import map from '../../src/assets/image/carte2.jpg'
import Button from 'react-bootstrap/Button';
import IHomeBuyProps from '../interfaces/IHomeBuyProps';
import SearchBar from './SearchBar';
import Pagination from 'react-bootstrap/Pagination';

function Buy() {
  return (
    <>
      <h3>Acheter / Louer</h3>
      <h3 style={{ color: 'gray' }}>Votre futur bien</h3>
      <Container className="justify-content-center align-items-center h-100 mt-5">
        <SearchBar />
      </Container>
      <Container className="d-flex justify-content-center align-items-center h-100 mt-5">
        <Row>
          {buyHomeDetails.map((buyHomeDetail: IHomeBuyProps) => {
            return (
              <Col lg="5" className="m-3">
                <CardHouseBuy
                  price={buyHomeDetail.price}
                  city={buyHomeDetail.city}
                  category={buyHomeDetail.category}
                  numberPiece={buyHomeDetail.numberPiece}
                  surface={buyHomeDetail.surface}
                  imageSrc={buyHomeDetail.imageSrc}
                />
              </Col>
            )
          })}
          <Pagination className="justify-content-center">
            <Pagination.Item linkStyle={{ backgroundColor: '#53D5BB', borderColor: '#53D5BB', borderRadius: 10, color: 'white', margin: 3 }} active>{1}</Pagination.Item>
            <Pagination.Item linkStyle={{ borderColor: '#53D5BB', borderRadius: 10, color: '#53D5BB', margin: 3 }} >{2}</Pagination.Item>
            <Pagination.Item linkStyle={{ borderColor: '#53D5BB', borderRadius: 10, color: '#53D5BB', margin: 3 }}>{3}</Pagination.Item>
            <Pagination.Next linkStyle={{ borderColor: '#53D5BB', borderRadius: 10, color: '#53D5BB', margin: 3 }} />
          </Pagination>
        </Row>
        <Col lg="6" >
          <Image style={{ borderRadius: 50 }} src={map} height="700"></Image>
          <div className='text-center mt-3'>
            <Button style={{ borderRadius: 50, backgroundColor: '#394460', border: 0, fontSize: 12 }} variant="primary">
              Prendre rendez-vous avec nos agents
            </Button>
          </div>
        </Col>
      </Container>
    </>
  );
}

export default Buy
