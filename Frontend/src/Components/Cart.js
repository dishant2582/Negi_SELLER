import React, { useContext, useEffect } from 'react'
import CartItem from './CartItem';
import OrderContext from './Context/OrderContext';

const Cart = () => {

  const context = useContext(OrderContext)
  const { FetchCart, Cartlist } = context;

  useEffect(() => {
    FetchCart();
    // console.log(Orderlist);
    // eslint-disable-next-line
  }, [])

  return (
    <div style={{ marginTop: "100px" }}>
      <div className='container my-5'>
        <p className='text-center fw-bold fs-1 my-2 text-decoration-underline'> <i class="fa-solid fa-cart-shopping fa-sm mx-2" style={{ color: "Black" }}></i>MY Cart Items</p>
        {Cartlist.length > 0 ? <div className='container py-3'>
          {Cartlist.map((x) => {
            return <div className="col-md-4 my-3">
              <CartItem item={x} />
            </div>
          })}
        </div> : <div class="alert alert-secondary" role="alert">
          Please Add item to CART
        </div>}
      </div>
    </div>
  )
}


export default Cart