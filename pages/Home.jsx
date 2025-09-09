import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import card1 from "../images/card1.jpg";

const Home=()=>{
    return(
        <>
        <h1>Shop by category</h1>

        <div style={{display:"flex", }}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card1}/>
      <Card.Body>
        <Card.Title>Mens</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card1}/>
      <Card.Body>
        <Card.Title>Women</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card1}/>
      <Card.Body>
        <Card.Title>Kids</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
        </>
    )
}
export default Home;