import React, { useState } from "react";
import "../home/home.scss";
import Slider from "react-slick";
import RatingIcon from "../../assets/images/rating.png";
import Image1 from "../../assets/images/3.jpeg"
import Image2 from "../../assets/images/33.jpeg"
import Image3 from "../../assets/images/333.jpeg"
import Image4 from "../../assets/images/3333.jpeg"
import Image5 from "../../assets/images/33333.jpeg"
import Image6 from "../../assets/images/4.jpeg"
import Image7 from "../../assets/images/5.jpeg"
import Image8 from "../../assets/images/6.jpeg"

export default function Plushies(props) {
    const [cartItem, setCartItem] = useState([])
    const settings = {
        slidesToShow: 4,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
    };

    const images = [
        {
            id: 3,
            image: Image1,
            name: "RICK AND MORTY SENIOR WHITE PLUSHY",
            price: 10,
        },
        {
            id: 3,
            image: Image2,
            name: "RICK AND MORTY SENIOR WHITE PLUSHY",
            price: 10,
        },
        {
            id: 3,
            image: Image3,
            name: "RICK AND MORTY SENIOR WHITE PLUSHY",
            price: 10,
        },
        {
            id: 3,
            image: Image4,
            name: "RICK AND MORTY SENIOR WHITE PLUSHY",
            price: 10,
        },
        {
            id: 3,
            image: Image5,
            name: "RICK AND MORTY SENIOR WHITE PLUSHY",
            price: 10,
        },
        {
            id: 4,
            image: Image6,
            name: "RICK AND MORTY GREEN PLUSHY",
            price: 8,
        },
        {
            id: 5,
            image: Image7,
            name: "RICK AND MORTY BLUE PLUSHY",
            price: 8,
        },
        {
            id: 6,
            image: Image8,
            name: "RICK AND MORTY CHILD PLUSHY",
            price: 8,
        },
    ]

    return (
        <div>
            <div className="slider-product">
                <div className="container-md">
                    <div className="all-section-alignment">
                        <Slider {...settings}>
                            {images.map((item, i) => {
                                return (
                                    <div className="slide-card">
                                        <div className="product-image">
                                            <img src={item.image} />
                                        </div>
                                        <div className="card-details">
                                            <p>{item.name}</p>
                                            <span>Price : ${item.price}</span>
                                            <div className="rating-alignment">
                                                {item.id === 3 && [1, 2, 3, 4].map(() => {
                                                    return (
                                                        <>
                                                            <img src={RatingIcon} alt="RatingIcon" />
                                                        </>
                                                    )
                                                }
                                                )}
                                                {item.id === 3 && "(11)"}
                                                {item.id === 4 && [1, 2].map(() => {
                                                    return (
                                                        <>
                                                            <img src={RatingIcon} alt="RatingIcon" />
                                                        </>
                                                    )
                                                })}
                                                {item.id === 4 && "(65)"}
                                                {item.id === 5 && [1, 2, 3].map(() => {
                                                    return (
                                                        <>
                                                            <img src={RatingIcon} alt="RatingIcon" />
                                                        </>
                                                    )
                                                })}
                                                {item.id === 5 && "(33)"}
                                                {item.id === 6 && [1, 2, 3].map(() => {
                                                    return (
                                                        <>
                                                            <img src={RatingIcon} alt="RatingIcon" />
                                                        </>
                                                    )
                                                })}
                                                {item.id === 6 && "(27)"}
                                            </div>
                                            <div className="add-to-cart" onClick={() => {
                                                console.log("itm", item);
                                                setCartItem(() => [...cartItem, item])
                                                props.setPlushyData(() => [...cartItem, item]);
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
