import React, { useContext, useEffect } from 'react'
import OrderContext from './Context/OrderContext';
import ItemList from './ItemList';

const Order = () => {

  const context = useContext(OrderContext)
  const { FetchOrder, Orderlist } = context;

  useEffect(() => {
    FetchOrder();
    // console.log(Orderlist);
    // eslint-disable-next-line
  }, [])


  return (
    <div style={{ marginTop: "100px" }}>
      <div className='container my-5' >
        <p className='text-center fw-bold fs-1 my-2 text-decoration-underline mt-5'> <i class="fa-sharp fa-solid fa-gift fa-sm mx-2 " style={{ color: "Black" }}></i>MY ORDERS</p>
        {Orderlist.length > 0 ? <div className='container py-3'>
          {Orderlist.map((x) => {
            return <div className="col-md-4 my-3">
              <ItemList items={x} />

            </div>
          })}
        </div> : <div class="alert alert-secondary" role="alert">
          Please Order Something to display
        </div>}
      </div>
    </div>
  )
}

export default Order