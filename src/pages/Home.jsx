import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";

import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import b1 from "../images/b1.jpg";

import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";

import { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../component/Footer";
import "../css/Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const [watch, setWatch] = useState([]);

  const loadata = async () => {
    let api = `${import.meta.env.VITE_API_URL}/products`;
    const response = await axios.get(api);
    setWatch(response.data);
  };

  useEffect(() => {
    loadata();
  }, []);

  return (
    <>
      {/* HERO CAROUSEL */}
      <Carousel className="hero-carousel">
        {[slide1, slide2, slide3].map((img, index) => (
          <Carousel.Item key={index}>
            <img className="hero-img" src={img} alt="Watch Slide" />
            <Carousel.Caption>
              <h3>Luxury Watches</h3>
              <p>Timeless elegance for every moment</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* SHOP BY CATEGORY */}
      <section className="dark-section">
        <h2 className="section-title">
          <span>Shop by</span> Category
        </h2>

        <div className="card-grid">
          {[card1, card2, card3].map((img, i) => (
            <Card key={i} className="category-card">
              <Card.Img src={img} />
              <Card.Body>
                <Card.Title>{["Men", "Women", "Kids"][i]}</Card.Title>
                <Card.Text>Premium collection</Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      {/* SHOP BY BRANDS */}
      <section className="dark-section">
        <h2 className="section-title">
          <span>Shop by</span> Brands
        </h2>

        <div className="card-grid">
          <Card className="brand-card">
            <Card.Img src={card1} />
            <Card.Body>
              <Card.Title>Rolex</Card.Title>
              <Button variant="warning">Shop Now</Button>
            </Card.Body>
          </Card>

          <Card className="brand-card">
            <Card.Img src={card2} />
            <Card.Body>
              <Card.Title>Omega</Card.Title>
              <Button variant="warning">Shop Now</Button>
            </Card.Body>
          </Card>

          <Card className="brand-card">
            <Card.Img src={b1} />
            <Card.Body>
              <Card.Title>Tag Heuer</Card.Title>
              <Button variant="warning">Shop Now</Button>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* TOP PRODUCTS */}
      <section className="dark-section">
        <h2 className="section-title">
          <span>Top</span> Products
        </h2>

        <div className="product-grid">
          {watch.map((item) => (
            <Card key={item.id} className="product-card">
              <Card.Img src={item.images} />
              <Card.Body>
                <Card.Title>{item.brand}</Card.Title>
                <Card.Text>{item.name}</Card.Text>
                <p className="price">₹{item.price}</p>
                <Button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        name: item.name,
                        brand: item.brand,
                        category: item.category,
                        price: item.price,
                        images: item.images,
                        qnty: 1,
                      })
                    )
                  }
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
