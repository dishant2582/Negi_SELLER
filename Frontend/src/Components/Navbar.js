import React, { useState, useContext } from 'react'
import negiSellerLogo from '../Components/Images/negi_seller_logo.png'
import { useNavigate } from 'react-router';
import Alert from './Alert';
import StoreItem from './StoreItem';
import Spinner from './Spinner';
import OrderContext from './Context/OrderContext';
import { useLocation } from "react-router-dom";

const Navbar = () => {

    var navigate = useNavigate();
    const context = useContext(OrderContext)
    const { loading, setloading, alert, setalert, setalertText } = context;
    let location = useLocation();

    //SignUP
    const [SignUpDetails, setSignUpDetails] = useState({ username: "", email: "", password: "" });

    const SignUponchange = (e) => {
        setSignUpDetails({ ...SignUpDetails, [e.target.name]: e.target.value })
    }

    //Login
    const [loginDetails, setloginDetails] = useState({ email: "", password: "" });

    const loginOnchange = (e) => {
        setloginDetails({ ...loginDetails, [e.target.name]: e.target.value })
    }


    //Sign UP
    const handleSignUp = async (e) => {

        const host = "https://negi-seller-backend.onrender.com";
        try {
            const response = await fetch(`${host}/api/auth/createuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: SignUpDetails.username, email: SignUpDetails.email, password: SignUpDetails.password })
            });
            const data = await response.json();
            if (data.success === true) {
                localStorage.setItem('token', data.authToken);
                document.getElementById('SignUpClose').click();
                navigate("/")
                setalert(true);
                setalertText("SIGN UP")
                setTimeout(() => {
                    setalert(false)
                }, 2500)
            }
            console.log(data);


        } catch (error) {
            console.log(error);

        }
    }

    //Login
    const handleLogin = async (e) => {

        const host = "https://negi-seller-backend.onrender.com";
        try {
            const response = await fetch(`${host}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: loginDetails.email, password: loginDetails.password })
            });
            const data = await response.json();
            if (data.success === true) {
                localStorage.setItem('token', data.authToken);
                document.getElementById('loginClose').click();
                navigate("/")
                setalert(true);
                setalertText("LOGIN ")
                setTimeout(() => {
                    setalert(false)
                }, 2500)
            }
            console.log(data);

        } catch (error) {
            console.log(error);

        }
    }

    //LOG OUT
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/")
        setalert(true);
        setalertText(" LOG OUT !")
        setTimeout(() => {
            setalert(false)
        }, 2500)
    }

    const [Search, setSearch] = useState(null)
    const [Products, setProducts] = useState([])


    //Search Bar On Change
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const fetchdata = async () => {
        setloading(true)
        const url = `https://dummyjson.com/products/search?q=${Search}`;
        let data = await fetch(url);
        let parseData = await data.json();
        setProducts(parseData.products)
        setloading(false)
    }

    // On Search
    const handleSearchClick = () => {
        // console.log(Search);
        if (Search !== null) {
            navigate("/")
            fetchdata();
        }
    }



    return (
        <div>
            <nav className="navbar  fixed-top navbar-expand-lg navbar-dark bg-danger ">
                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <i className="fa-solid fa-chart-simple fa-rotate-90 fa-2xl ms-2 " style={{ color: "white" }} ></i>
                </a>
                <div className="container-fluid">
                    <div className='ms-4'>
                        <img src={negiSellerLogo} alt="" width="30" height="24" />
                        <a className="navbar-brand" href="/">Negi Sellers</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                            <li className="nav-item">
                                <a className={`nav-link ${location.pathname === "/" ? "active" : ""}`} href="/"> <i className="fa-solid fa-house fa-sm mx-1" style={{ color: "#ffffff" }}></i>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${location.pathname === "/cart" ? "active" : ""}`} href="/cart"> <i class="fa-solid fa-cart-shopping fa-sm mx-1" style={{ color: "#ffffff" }}></i>My Cart</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${location.pathname === "/order" ? "active" : ""}`} href="/order"> <i class="fa-sharp fa-solid fa-gift fa-sm mx-1" style={{ color: "#ffffff" }}></i>My Order</a>
                            </li>
                        </ul>
                        <form className="d-flex mx-5">
                            <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                            <button className="btn btn-outline-light" type='button' onClick={handleSearchClick}> Search</button>
                        </form>
                    </div>
                    {!localStorage.getItem('token') ? <div>
                        <button type="button" class="btn btn-light fw-bold mx-2" data-bs-toggle="modal" data-bs-target="#LoginModal">LOG IN</button>
                        <button type="button" class="btn btn-light fw-bold mx-2" data-bs-toggle="modal" data-bs-target="#SignUpModal">SIGN UP</button></div> : <button className="btn btn-light fw-bold mx-2" onClick={handleLogout}> LOG OUT</button>}
                </div>

            </nav>

            {/* Side bar Off Canvas */}
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fs-2 text-decoration-underline" id="offcanvasExampleLabel">
                        <img src={negiSellerLogo} alt="" width="50" height="50" />NEGI SELLERS</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body my-2  fs-5">
                    <div className='mb-3'>

                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><a className="text-dark fs-3 text-decoration-none" href="/"> <i className="fa-solid fa-house fa-sm mx-3" style={{ color: "Red" }}></i>Home</a></li>
                        <li class="list-group-item"><a className="text-dark fs-3 text-decoration-none" href="/cart"> <i class="fa-solid fa-cart-shopping fa-sm mx-3" style={{ color: "Red" }}></i>My Cart</a></li>
                        <li class="list-group-item"><a className="text-dark fs-3 text-decoration-none" href="/order"> <i class="fa-sharp fa-solid fa-gift fa-sm mx-3" style={{ color: "Red" }}></i>My Order</a></li>
                        {/* <li class="list-group-item">A fourth item</li> */}
                        {/* <li class="list-group-item">And a fifth one</li> */}

                    </ul>

                    <div style={{ marginTop: "230px", marginLeft:"33px" }}>
                        <h6 className="text-uppercase fw-bold mb-4 my-5 fs-3">
                            <i class="fa-solid fa-user-graduate fa-xl me-3" style={{ color: "Red" }} ></i>DISHANT NEGI
                        </h6>

                    </div>

                </div>
            </div>



            {/* Modal login */}
            <div class="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content bg-danger">
                        <div class="modal-header">
                            <h5 class="modal-title text-light fw-italic " id="LoginModalLabel"> <img src={negiSellerLogo} alt="" width="30" height="24" /> Login</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body bg-light">
                            <div class="mb-3 row">
                                <label for="Email" class="col-sm-2 col-form-label fw-bold ">Email </label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="loginemail" name="email" onChange={loginOnchange} value={loginDetails.email} />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="Password" class="col-sm-2 col-form-label fw-bold">Password </label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="loginpassword" name="password" onChange={loginOnchange} value={loginDetails.password} />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" id="loginClose" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-dark" onClick={handleLogin}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Sign Up */}
            <div class="modal fade" id="SignUpModal" tabindex="-1" aria-labelledby="SignUpModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content bg-danger">
                        <div class="modal-header">
                            <h5 class="modal-title text-light fw-italic " id="SignUpModalLabel"> <img src={negiSellerLogo} alt="" width="30" height="24" /> Sign Up</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body bg-light">
                            <div class="mb-3 row">
                                <label class="col-sm-2 col-form-label fw-bold "> Name  </label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="username" name="username" onChange={SignUponchange} value={SignUpDetails.username} />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="Email" class="col-sm-2 col-form-label fw-bold ">Email </label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="email" name="email" onChange={SignUponchange} value={SignUpDetails.email} />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="Password" class="col-sm-2 col-form-label fw-bold">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="password" name="password" onChange={SignUponchange} value={SignUpDetails.password} />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" id="SignUpClose" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-dark" onClick={handleSignUp}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

            {alert && <Alert />}

            {Products && <div className='container ' style={{marginTop: "70px"}}>
                <div className="row">
                    {Products.map((x) => {
                        return <div className="col-md-4 my-3">
                            <StoreItem item={x} />
                        </div>
                    })}
                </div>
            </div>}
            {loading && <Spinner />}
        </div>
    )
}

export default Navbar