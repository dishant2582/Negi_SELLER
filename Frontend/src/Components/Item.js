import React, { useContext, useState } from 'react'
import OrderContext from './Context/OrderContext'
import negiSellerLogo from '../Components/Images/negi_seller_logo.png'
import { Rating } from 'react-simple-star-rating'


const Item = (props) => {

    const context = useContext(OrderContext)
    const { currentItem, AddOrder, AddCart, setalert, setalertText } = context;

    // Order 
    const [OrderDetails, setOrderDetails] = useState({ quantity: "", pincode: "", address: "" });

    const Orderonchange = (e) => {
        setOrderDetails({ ...OrderDetails, [e.target.name]: e.target.value })
    }

    const handleOrder = () => {
        if (localStorage.getItem('token')) {
            AddOrder(currentItem, OrderDetails.quantity, OrderDetails.pincode, OrderDetails.address);
            document.getElementById('OrderClose').click();
        }
        else {
            document.getElementById('OrderClose').click();
            setalert(true);
            setalertText("Please login!")
            setTimeout(() => {
                setalert(false)
            }, 2500)

        }
    }

    const handleCart = () => {
        if (localStorage.getItem('token')) {
            AddCart(currentItem);
        }
        else {
            setalert(true);
            setalertText("Please login!")
            setTimeout(() => {
                setalert(false)
            }, 2500)

        }
    }

    return (
        <div>
            <div className="d-flex bd-highlight mb-3 container my-5 shadow-lg p-3 mb-5 bg-body rounded">
                <div className="me-auto p-2 bd-highlight">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            {currentItem.images[0] && <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>}
                            {currentItem.images[1] && <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>}
                            {currentItem.images[2] && <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>}
                            {currentItem.images[3] && <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>}
                        </div>
                        <div className="carousel-inner">
                            {currentItem.images[0] && <div className="carousel-item active">
                                <img src={currentItem.images[0]} className="d-block" alt="SORRY" style={{ height: "350px", width: "500px" }} />
                            </div>}
                            {currentItem.images[1] && <div className="carousel-item">
                                <img src={currentItem.images[1]} className="d-block " alt="SORRY" style={{ height: "350px", width: "500px" }} />
                            </div>}
                            {currentItem.images[2] && <div className="carousel-item">
                                <img src={currentItem.images[2]} className="d-block " alt="SORRY" style={{ height: "350px", width: "500px" }} />
                            </div>}
                            {currentItem.images[3] && <div className="carousel-item">
                                <img src={currentItem.images[3]} className="d-block " alt="SORRY" style={{ height: "350px", width: "500px" }} />
                            </div>}
                            {currentItem.images[4] && <div className="carousel-item">
                                <img src={currentItem.images[4]} className="d-block " alt="SORRY" style={{ height: "350px", width: "500px" }} />
                            </div>}

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <button type="button" class="btn btn-dark my-3 mx-2 fs-3" onClick={handleCart} style={{ height: "80px", width: "200px" }}> <i class="fa-solid fa-cart-shopping fa-sm mx-1" style={{ color: "#ffffff" }}></i>ADD CART</button>
                    <button type="button" class="btn btn-danger my-3 mx-5 fs-3" data-bs-toggle="modal" data-bs-target="#OrderModal" style={{ height: "80px", width: "200px" }}><i class="fa-sharp fa-solid fa-gift fa-sm mx-1" style={{ color: "#ffffff" }}></i>BUY NOW</button>
                </div>
                <div className="p-2 bd-highlight">
                    <div className='container my-2 border border-danger shadow-lg p-3 mb-5 bg-body rounded' style={{ width: "550px" }}>
                        <h1 className='md-2 fw-bold '>{currentItem.title} <div className='container mx-3 d-inline'> <Rating initialValue={currentItem.rating} /> </div></h1>
                        <p className="fw-italic my-4">{currentItem.description}</p>
                        <h2 className='d-inline'><i class="fa-solid fa-indian-rupee-sign fa-sm mx-2" style={{ color: "Red" }}></i>{currentItem.price}0</h2> <h5 className='d-inline mx-5 text-success fw-bold bg-success text-light'> {currentItem.discountPercentage} % off  .</h5>
                        <ul className='my-4'>
                            <li>Special PriceGet extra 10% off (price inclusive of cashback/coupon)T&C</li>
                            <li>Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999</li>
                            <li>Partner OfferApply & get ₹10,000 Times Prime benefits + ₹1,000 Gift Card* with Negi Seller Axis Bank Credit Card</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Modal Place Order */}
            <div class="modal fade" id="OrderModal" tabindex="-1" aria-labelledby="OrderModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content bg-danger">
                        <div class="modal-header">
                            <h5 class="modal-title text-light fw-italic " id="OrderModalLabel"> <img src={negiSellerLogo} alt="" width="30" height="24" /> Order Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body bg-light">
                            <div class="mb-3 row">
                                <label class="col-sm-2 col-form-label fw-bold "> Quantity  </label>
                                <div class="col-sm-10">
                                    <input type="number" class="form-control" id="quantity" name="quantity" onChange={Orderonchange} value={OrderDetails.quantity} />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label class="col-sm-2 col-form-label fw-bold ">Pincode </label>
                                <div class="col-sm-10">
                                    <input type="number" class="form-control" id="pincode" name="pincode" onChange={Orderonchange} value={OrderDetails.pincode} />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label class="col-sm-2 col-form-label fw-bold">Address</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="address" name="address" onChange={Orderonchange} value={OrderDetails.address} />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" id="OrderClose" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-dark" onClick={handleOrder}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Item