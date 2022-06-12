import React, { useState } from "react";
import "../home/home.scss";
import Slider from "react-slick";
import RatingIcon from "../../assets/images/rating.png";
import Image1 from "../../assets/images/7.jpeg"
import Image2 from "../../assets/images/8.jpeg"
import Image3 from "../../assets/images/9.jpeg"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

export default function Candles(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [cartItem, setCartItem] = useState([])

    const settings = {
        slidesToShow: 3,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
    };

    const images = [
        {
            id: 7,
            image: Image1,
            name: "RICK AND MORTY UFO CANDLE",
            price: 7,
        },
        {
            id: 8,
            image: Image2,
            name: "RICK AND MORTY SANTA CANDLE",
            price: 7,
        },
        {
            id: 9,
            image: Image3,
            name: "RICK AND MORTY FIRE WAVES",
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
                                    <div className="slide-card">
                                        <div className="product-image-one">
                                            <img src={item.image} />
                                        </div>
                                        <div className="card-details">
                                            <p>{item.name}</p>
                                            <div className="rating-alignment">
                                                {item.id === 7 && [1, 2, 3, 4].map(() => {
                                                    return (
                                                        <>
                                                            <img src={RatingIcon} alt="RatingIcon" />
                                                        </>
                                                    )
                                                }
                                                )}
                                                {item.id === 7 && "(43)"}
                                                {item.id === 8 && [1, 2].map(() => {
                                                    return (
                                                        <>
                                                            <img src={RatingIcon} alt="RatingIcon" />
                                                        </>
                                                    )
                                                })}
                                                {item.id === 8 && "(36)"}
                                                {item.id === 9 && [1, 2, 3].map(() => {
                                                    return (
                                                        <>
                                                            <img src={RatingIcon} alt="RatingIcon" />
                                                        </>
                                                    )
                                                })}
                                                {item.id === 9 && "(14)"}
                                            </div>
                                            <div className="add-to-cart" onClick={() => {
                                                console.log("itm", item);
                                                setCartItem(() => [...cartItem, item])
                                                props.setCandleData(() => [...cartItem, item]);
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
