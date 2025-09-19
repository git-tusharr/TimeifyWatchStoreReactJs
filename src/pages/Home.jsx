import Spinner from 'react-bootstrap/Spinner';


import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";

import b1 from "../images/b1.jpg"

import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

import { useState,useEffect } from 'react';
import axios from 'axios';

import Footer from '../component/Footer';
import { Bs1Circle } from 'react-icons/bs';

const Home=()=>{
  const dispatch=useDispatch();

  const [watch,setWatch]=useState([]);

  const loadata=async()=>{
    let api=`${import.meta.env.VITE_API_URL}/products`;
    const response=await axios.get(api);
    console.log(response.data);
    setWatch(response.data)
  }

  useEffect(()=>{
    loadata();
  },[])


  const ans=watch.map((key)=>{
    return(
      <>

      <div>
      <Card style={{ width: '18rem', margin:"10px" }}>
      <Card.Img variant="top" src={key.images}  height="400px" />
      <Card.Body>
        <Card.Title>{key.brand}</Card.Title>
        <Card.Text>
           {key.name}
           <br />
           <span style={{color:"Black"}}>Category : {key.category}</span> 
           <br />
           <span style={{color:"navy" , fontWeight:"bold"}}>Price : {key.price}</span> 
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addToCart({id:key.id,name:key.name,brand:key.brand,category:key.category,price:key.price,images:key.images,qnty:1}))}}>Add To Cart</Button>
      </Card.Body>
    </Card>
      </div>



      
      </>
    )
  })



    return(
        <>

      <div style={{width:"100%"}}>

        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      src={slide1}
      alt="Luxury Gold Watch"
    />
    <Carousel.Caption>
      <h3>Timeless Luxury</h3>
      <p>Discover watches that embody elegance, craftsmanship, and prestige.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <img
      style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      src={slide2}
      alt="Elegant Steel Watch"
    />
    <Carousel.Caption>
      <h3>Elegance Redefined</h3>
      <p>Sleek, refined, and built to last — for those who value true sophistication.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      src={slide3}
      alt="Classic Timepiece"
    />
    <Carousel.Caption>
      <h3>Crafted for Eternity</h3>
      <p>Luxury timepieces that stand the test of time, never going out of style.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      </div>


      















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



       <div style={{ backgroundColor: "black", padding: "50px 0" }}>
  <div style={{ fontSize: "50px", textAlign: "center", marginBottom: "50px" }}>
    <span style={{ color: "yellow" }}>Shop by</span>{" "}
    <span style={{ color: "white" }}>Brands</span>
    <p style={{ fontSize: "20px", color: "white", marginTop: "20px" }}>
      Explore exclusive timepieces from the world's most prestigious watchmakers
    </p>
  </div>

  <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", gap: "30px" }}>
    {/* Brand 1 */}
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <Card.Title>Rolex</Card.Title>
        <Card.Text>
          Timeless luxury and precision craftsmanship for every occasion.
        </Card.Text>
        <Button variant="warning">Shop Now</Button>
      </Card.Body>
    </Card>

    {/* Brand 2 */}
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <Card.Title>Omega</Card.Title>
        <Card.Text>
          Iconic designs that combine elegance and innovation.
        </Card.Text>
        <Button variant="warning">Shop Now</Button>
      </Card.Body>
    </Card>

    {/* Brand 3 */}
    <Card style={{ width: "18rem" }}>
      <Card.Img style={{ height: "18rem" }} variant="top" src={b1} />
      <Card.Body>
        <Card.Title>Tag Heuer</Card.Title>
        <Card.Text>
          Performance-driven watches crafted with precision and style.
        </Card.Text>
        <Button variant="warning">Shop Now</Button>
      </Card.Body>
    </Card>
  </div>
</div>


<div id='our-top-products'>

  <div style={{ fontSize: "50px", textAlign: "center", marginBottom: "50px" }}>

    <span style={{ color: "yellow" }}>Our Top</span>{" "}
    <span style={{ color: "white" }}>Selling</span>
    <p style={{ fontSize: "20px", color: "white", marginTop: "20px" }}>
      Explore exclusive timepieces from the world's most prestigious watchmakers
    </p>

  </div >

      <div id='watch-cards'>
        {ans}
      </div>

</div>

 




        </>
    )
}
export default Home;