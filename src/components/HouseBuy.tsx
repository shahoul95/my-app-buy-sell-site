import Card from 'react-bootstrap/Card';
import IHomeBuyProps from '../interfaces/IHomeBuyProps'

function HomeBuy({ city, imageSrc, category, surface, price, numberPiece }: IHomeBuyProps) {
    return (
        <Card>
            <Card.Img height="250" variant="top" src={imageSrc} />
            <Card.Body>
                <Card.Text>
                    {category}  {numberPiece} pièces {surface}m² {price}€
                </Card.Text>
                <Card.Text>
                    {city}
                </Card.Text>
            </Card.Body>
        </Card>


    );
}

export default HomeBuy;
