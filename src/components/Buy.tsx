import { buyHomeDetails } from '../buy-home'
import Image from 'react-bootstrap/Image';
import HouseBuy from '../components/HouseBuy'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import map from '../assets/image/carte2.jpg'
import Button from 'react-bootstrap/Button';
import IHomeBuyProps from '../interfaces/IHomeBuyProps';
import SearchBar from './SearchBar';

function Buy() {
  return (
    <>
      <h3>Acheter /Louer</h3>
      <h3>Votre futur bien</h3>
      <SearchBar />
      <Container className="d-flex justify-content-center align-items-center h-100 mt-4">
        <Row>
          {buyHomeDetails.map((buyHomeDetail: IHomeBuyProps) => {
            return (
              <Col lg="5" className="m-3">
                <HouseBuy
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
        </Row>
        <div>
          <Image src={map} height="700"></Image>
          <div className='text-center mt-2'>
            <Button variant="primary">Prendre rendez-vous avec nos agents</Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Buy;
