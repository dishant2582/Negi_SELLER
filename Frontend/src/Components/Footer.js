import React from 'react'

const Footer = () => {
    return (
            <div>

                <footer className="text-center text-lg-start bg-dark text-light text-muted" >

                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                        <div className="me-5 d-none d-lg-block"  >
                            <span className=' text-light fw-bold'>Get connected with me on social networks:</span>
                        </div>

                        <div>

                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/chinu.negi.1213?mibextid=ZbWKwL" target="_blank" rel="noreferrer" role="button"><i class="fab fa-facebook-f"></i></a>


                            {/* <a class="btn btn-outline-light btn-floating m-1" target="_blank" role="button"
            ><i class="fab fa-twitter"></i
            ></a> */}


                            <a class="btn btn-outline-light btn-floating m-1" href="#!" target="_blank" rel="noreferrer" role="button"><i class="fab fa-google"></i></a>


                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/dishant_negi_/" target="_blank" rel="noreferrer" role="button"><i class="fab fa-instagram"></i></a>


                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/dishant-negi-42200b237" target="_blank" rel="noreferrer" role="button"><i class="fab fa-linkedin-in"></i></a>


                            <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/dishant2582" target="_blank" rel="noreferrer" role="button"><i class="fab fa-github"></i></a>
                        </div>

                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-5">

                            <div className="row mt-3">

                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                    <h6 className="text-uppercase text-light fw-bold mb-4">
                                        <i className="fas fa-gem me-3"></i>NEGI SELLER
                                    </h6>
                                    <p className=' text-light'>
                                        It is a simple E-commerce Website Project to show my skills using React , Node JS, Mongo DB, Express JS
                                    </p>
                                    <h6 className="text-uppercase fw-bold mb-4  text-light my-5">
                                        <i class="fa-solid fa-user-graduate fa-xl me-3"></i>Owner
                                    </h6>
                                    <h5 className='fw-bold  text-light'>DISHANT NEGI</h5>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4  text-light">
                                        MERN Stack
                                    </h6>
                                    <p>
                                        <a href="https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=bing&utm_campaign=search_bs_pl_evergreen_atlas_core_prosp-brand_gic-null_apac-in_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=415204524&adgroup=1207264237113792&msclkid=a6ff4df928d610dc0d71294d3c7b29fc" target="_blank" rel="noreferrer" className="text-light">Mongo DB</a>
                                    </p>
                                    <p>
                                        <a href="https://expressjs.com/" target="_blank" rel="noreferrer" className="text-light">Express JS</a>
                                    </p>
                                    <p>
                                        <a href="https://react.dev/" rel="noreferrer" target="_blank" className="text-light">React JS</a>
                                    </p>
                                    <p>
                                        <a href="https://nodejs.org/en" rel="noreferrer" target="_blank" className="text-light">Node JS</a>
                                    </p>
                                </div>


                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4  text-light">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a href="/" target="_blank" ra className="text-light">Home</a>
                                    </p>
                                    <p>
                                        <a href="/order" target="_blank" className=" text-light">Orders</a>
                                    </p>
                                    <p>
                                        <a href="/cart" target="_blank" className=" text-light">Cart</a>
                                    </p>
                                </div>


                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4  text-light">Contact</h6>
                                    <p className=' text-light'><i className="fas fa-home me-3  text-light"></i> Ramnagar, Nainital, India</p>
                                    <p className=' text-light'>
                                        <i className="fas fa-envelope me-3  text-light "></i> negidishant5@gmail.com
                                    </p>
                                    <p className=' text-light'><i className="fas fa-phone me-3  text-light"></i> +91 9389937075</p>
                                    <p className=' text-light'><i className="fas fa-print me-3  text-light"></i> + 01 234 567 89</p>
                                </div>

                            </div>

                        </div>
                    </section>

                    <div className="text-center p-4 fw-bold  text-light">
                        MERN Project By Dishant Negi
                    </div>

                </footer>
            </div>
    )
}
export default Footer;