import React, { useState, useEffect } from "react";
import "../home/home.scss";
import Slider from "react-slick";
import RatingIcon from "../../assets/images/rating.png";
import Image1 from "../../assets/images/1.jpeg"
import Image2 from "../../assets/images/11.jpeg"
import Image3 from "../../assets/images/111.jpeg"
import Image4 from "../../assets/images/2.jpeg"
import Image5 from "../../assets/images/22.jpeg"
import Image6 from "../../assets/images/222.jpeg"
export default function Airpod(props) {
    const [cartItem, setCartItem] = useState([])
    const settings = {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 4,
        speed: 500,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                  arrows: false,
                  slidesToShow: 3,
                },
              },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1,
            },
          },
        ],
      };

    const images = [
        {
            id: 1,
            image: Image1,
            name: "RICK AND MORTY BLACK AIRPOD COVER",
            price: 10,
        },
        {
            id: 1,
            image: Image2,
            name: "RICK AND MORTY BLACK AIRPOD COVER",
            price: 10,
        },
        {
            id: 1,
            image: Image3,
            name: "RICK AND MORTY BLACK AIRPOD COVER",
            price: 10,
        },
        {
            id: 2,
            image: Image4,
            name: "RICK AND MORTY CYAN AIRPOD COVER",
            price: 8,
        },
        {
            id: 2,
            image: Image5,
            name: "RICK AND MORTY CYAN AIRPOD COVER",
            price: 8,
        },
        {
            id: 2,
            image: Image6,
            name: "RICK AND MORTY CYAN AIRPOD COVER",
            price: 8,
        }
    ]

    return (
        <div>
            <div className="slider-product">
                <div className="container-md">
                    <div className="all-section-alignment">
                        <Slider {...settings}>
                            {images.map((item, i) => {
                                return (
                                 
                                    <div className="slide-card ">
                                        <div className="product-image">
                                            <img src={item.image} />
                                        </div>
                                        <div className="card-details">
                                            <p>{item.name}</p>
                                            <span>Price : ${item.price}</span>
                                            <div className="rating-alignment">
                                                {item.id === 1 && [1, 2, 3, 4].map(() => {
                                                    return (
                                                        <>
                                                            <img src={RatingIcon} alt="RatingIcon" />
                                                        </>
                                                    )
                                                }
                                                )}
                                                {item.id === 1 && "(40)"}
                                                {item.id === 2 && [1, 2, 3].map(() => {
                                                    return (
                                                        <>
                                                            <img src={RatingIcon} alt="RatingIcon" />
                                                        </>
                                                    )
                                                })}
                                                {item.id === 2 && "(31)"}
                                            </div>
                                            <div className="add-to-cart" onClick={() => {
                                                console.log("itm", item);
                                                setCartItem(() => [...cartItem, item])
                                                props.setAirpodData(() => [...cartItem, item]);

                                            }}>
                                                <button>Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}
