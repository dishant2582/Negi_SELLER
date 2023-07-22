import React, {useContext}  from 'react'
import { useNavigate } from 'react-router';
import OrderContext from './Context/OrderContext';
// import Item from './Item';

const StoreItem = (props) => {

    const context = useContext(OrderContext)
    const{ setscurrentItem} = context;

    var navigate = useNavigate();
    const { item } = props;
    

    const handleOnclick = (item) =>{
        setscurrentItem(item)
        navigate("/item")
    }

    return (
        <div className='container shadow p-3 mb-5 bg-body rounded border border-danger'>
            <div className="card"  onClick={ ()=>handleOnclick(item)}>
                <img src={item.thumbnail} className="card-img-top" alt="..." style={{ height: "300px" }} />
                <div className="card-body ">
                    <h4 className='fw-bold'>{item.title}</h4>
                    <div class="d-flex bd-highlight mb-3">
                        <div class="me-auto p-2 bd-highlight"><p className="card-text text-danger fs-4 fw-bold "> <i class="fa-solid fa-indian-rupee-sign fa-sm" style={{ color: "Red" }}></i> {item.price}0</p></div>
                        <div class="p-2 bd-highlight"> <span class="badge bg-success text-inline fs-6 ">{item.rating} <i class="fa-sharp fa-solid fa-star fa-sm" style={{ color: "#f2f2f2" }}></i></span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreItem