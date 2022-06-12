import React, { useState, useEffect } from "react";
import "../home/home.scss";
import Slider from "react-slick";
import RatingIcon from "../../assets/images/rating.png";
import Airpod from "./Airpod";
import Plushies from "./Plushies";
import Candles from "./Candle";
import Cart from "../../assets/images/shopping-cart.png"
import Trash from "../../assets/images/delete.png"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import 'react-toastify/dist/ReactToastify.css';
import Plan from "./payments/Plan";
import Next from "../../assets/images/next.png"

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

export default function Home() {

  const [modalOpen, setModalOpen] = useState(false)
  const [open, setOpen] = useState(false);
  const [productType, setProductType] = useState("Airpod")
  const [cartItems, setCartItems] = useState([])
  const [airpodData, setAirpodData] = useState([])
  const [candleData, setCandleData] = useState([])
  const [plushyData, setPlushyData] = useState([])

  const settings = {
    slidesToShow: 4,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
  };

  const handleClose = () => { setOpen(false) }

  const handlePay = () => {
    // setTimeout(() => {
    //   toast.success("Payment Successfull")
    //   setTimeout(() => {
    //     toast.success("Payment Successfull")
    //   }, [2000])
    // }, [2000])
  };

  let cart = [...plushyData, ...candleData, ...airpodData]
  useEffect(() => {
    setCartItems(cart)
    console.log("ding", cart);
    localStorage.setItem("cartItems", JSON.stringify(cart))
  }, [plushyData, candleData, airpodData])

  const removeItem = () => {
    console.log("object");
  }

  return (
    <div>
      <div className="full-banner">
        <div className="container">
          <div className="header">
            <div className="header-alignment">
              <div className="logo">
                <h1>RickandMortyOfficial.com</h1>
              </div>
              <div className="menu">
                <span onClick={() => { setProductType("Airpod") }}>
                  <a>Airpod Holders</a>
                </span>
                <span onClick={() => { setProductType("Plushies") }}>
                  <a>Plushies</a>
                </span>
                <span onClick={() => { setProductType("Candles") }}>
                  <a>Candles</a>
                </span>
                <span onClick={() => { setModalOpen(true) }}>
                  <div className="cart-itm">
                    <img className="cart-image" height="30px" src={Cart} />
                    {cartItems.length === 0 ? "" : <span>{!cartItems ? "0" : cartItems?.length}</span>}
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        {productType === "Airpod" && <Airpod setAirpodData={setAirpodData} />}
        {productType === "Plushies" && <Plushies setPlushyData={setPlushyData} />}
        {productType === "Candles" && <Candles setCandleData={setCandleData} />}

      </div>
      {modalOpen && (
        <div className="modal-blur"></div>
      )
      }
      <div className={modalOpen ? "modal-medium modal-show" : "modal-medium modal-hidden"}>
        <div className="close-icon">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>Cart</div>
            <div className="cart-text" onClick={() => { setOpen(true); setModalOpen(false) }}>
              <img height="20px" src={Next} />{`Checkout`}
            </div>
          </div>
          <span onClick={() => setModalOpen(false)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                fill="#323232"
              ></path>
            </svg>
          </span>

        </div>

        <div className="modal-div">
          {cartItems?.length === 0 ?
            <div className="cart-empty">Cart is Empty</div>
            : cartItems?.map((item) => {
              console.log("ittttttem", item);
              return (

                <div className="modal-body">
                  <div className="new-card">
                    <img src={item.image} />
                  </div>
                  <div className="new-card-text">
                    <p>{item?.name}</p>
                    <span>
                      ${item?.price}
                    </span>
                  </div>
                  {/* <div onClick={() => { removeItem(item) }}> */}
                  <img style={{ cursor: "pointer", width: "30px" }} height="20px" src={Trash} />
                  {/* </div> */}
                </div>

              )
            })
          }
        </div>
      </div>
      {/* <ToastContainer /> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Checkout
        </DialogTitle>
        <DialogContent>
          <Plan />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => { handlePay() }} autoFocus>
            Pay
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}
