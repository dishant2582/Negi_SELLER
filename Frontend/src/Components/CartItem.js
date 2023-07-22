import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import OrderContext from './Context/OrderContext';

const CartItem = (props) => {

  const { item } = props;

  const context = useContext(OrderContext)
  const { DeleteCart, FetchCart } = context;

  var navigate = useNavigate();

  const handleRemove = (id) => {

    DeleteCart(id);
    navigate('/cart');
    FetchCart();
  }

  return (
    <div>
      <div className="card mb-3 shadow p-3 mb-5 bg-body rounded" style={{ width: "1100px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.imgUrl} className="img-fluid rounded-start" alt="SORRY" style={{ width: "300px", height: "200px" }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.discription}</p>
              <p className="card-text"><small className="text-muted">Added On : {new Date(item.date).toGMTString()}</small></p>

              <button type="button" class="btn btn-danger fw-bold" onClick={() => handleRemove(item._id)}>Remove Item</button>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem