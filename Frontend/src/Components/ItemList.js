import React, {useContext}  from 'react'
import { useNavigate } from 'react-router';
import OrderContext from './Context/OrderContext';

const ItemList = (props) => {

    const {items} = props;
    var navigate = useNavigate();

    const context = useContext(OrderContext)
    const{ DeleteOrder , FetchOrder} = context;

    const handleCancle =(id)=>{
        DeleteOrder(id);
        navigate('/order');
        FetchOrder();
    }

  return (
    <div className='container w-100'>
        <div className="card mb-3 shadow p-3 mb-5 bg-body rounded" style={{width: "1000px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={items.imgUrl} className="img-fluid rounded-start " alt="..."style={{width: "500px", height:"300px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title fs-2">{items.name}</h5>
        <p className="card-text">{items.discription}</p>
        <p className="card-text"><small className="text-muted">Ordered Date & Time: {new Date(items.date).toGMTString()} </small></p>

        <button type="button" class="btn btn-danger fw-bold" onClick={()=>handleCancle(items._id)}>Cancle Order</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ItemList