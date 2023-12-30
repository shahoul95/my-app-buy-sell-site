import Card from 'react-bootstrap/Card';
import IHomeBuyProps from '../interfaces/IHomeBuyProps'
import Image from 'react-bootstrap/Image';
import favoris from '../../src/assets/image/favori.svg'
import letterEmail from '../../src/assets/image/email-envelopeBLEU.svg'

function spaceAfterthreeDigit(number: any) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function CardHouseBuy({ city, imageSrc, category, surface, price, numberPiece }: IHomeBuyProps) {

    return (
        <Card style={{ border: 0 }}>
            <Card.Img style={{ borderRadius: 50 }} height="200" variant="top" src={imageSrc} />
            <Card.Body>
                <Card.Text style={{ fontSize: 12 }}>
                    {category}  {numberPiece} pièces {surface}m²
                    <b className='m-2'>
                        {spaceAfterthreeDigit(price)}€
                    </b>
                </Card.Text>
                <Card.Text style={{ fontSize: 12 }}>
                    {city}
                </Card.Text>
                <Card.Text>
                    <Image className='m-2' src={favoris} height="20"></Image>
                    <Image className="m_2" src={letterEmail} height="20"></Image>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardHouseBuy;
