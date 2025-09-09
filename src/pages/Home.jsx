import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";

const Home=()=>{
    return(
        <>

        <div style={{backgroundColor:"black"}}>
        
        <div style={{fontSize:"50px", textAlign:"center"}}>
          
           <span style={{color:"yellow"}}>Shop by</span> <span style={{color:"white"}}>category</span>
           <p style={{fontSize:"20px", textAlign:"center",marginBottom:"50px"}}>Find the perfect timepiece for every style and occasion</p>
        
         </div>
        <div style={{display:"flex" ,justifyContent:"space-evenly"}}>

            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={card1}/>
          <Card.Body>
            <Card.Title>Mens</Card.Title>
            <Card.Text>
              Bold designs for the modern gentleman
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={card2}/>
          <Card.Body>
            <Card.Title>Women</Card.Title>
            <Card.Text>
              Elegant timepieces for sophisticated women
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem'}}>
          <Card.Img style={{ height: '18rem'}} variant="top" src={card3}/>
          <Card.Body>
            <Card.Title>Kids</Card.Title>
            <Card.Text>
              Fun and durable watches for young explorers
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

    </div>
    </div>




    
        </>
    )
}
export default Home;