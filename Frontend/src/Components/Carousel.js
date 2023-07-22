import React from 'react'

const Carousel = () => {
    return (
        <div className='container my-5'>
            <div id="carouselExampleIndicators"   className="carousel slide" data-bs-ride="carousel">
                <div   className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"   className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div   className="carousel-inner ">
                <div   className="carousel-item active">
                        <img src="https://n4.sdlcdn.com/imgs/k/o/3/WEB_Palt_Hair_Care_28jun-0482a.jpg"   className="d-block w-100 " alt="..." style={{height: "500px"}} />
                    </div>
                    <div   className="carousel-item ">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/d6c2c00726dda91d.png?q=50"   className="d-block w-100" alt="..." style={{height: "500px"}}/>
                    </div>
                    <div   className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PCA/Groomingfest/DesktopHero_UNREC-2X._CB601245817_.jpg"   className="d-block w-100" alt="..." style={{height: "500px"}} />
                    </div>
                    <div   className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/ssserene/PD23/GW/11R/D88966113_WLD_OnePlus_11R_5G_-_Prime_DayPC_Hero_3000x1200_morning_new._CB601679504_.jpg"   className="d-block w-100" alt="..." style={{height: "500px"}}/>
                    </div>
                    <div   className="carousel-item">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/3abcd4c1fab0ee85.jpg?q=50"   className="d-block w-100" alt="..." style={{height: "500px"}}/>
                    </div>
                </div>
                <button   className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span   className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span   className="visually-hidden">Previous</span>
                </button>
                <button   className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span   className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span   className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel