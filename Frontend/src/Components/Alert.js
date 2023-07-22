import React,{useContext}from 'react'
import OrderContext from './Context/OrderContext';

const Alert = () => {

    const context = useContext(OrderContext)
    const { alertText } = context;
    return (
        <>
        {localStorage.getItem('token') ? <div className='container'>
            <div class="alert alert-primary mx-5 position-absolute top-50 start-50 translate-middle " role="alert" style={{backgroundColor: "black",color: "#37b637",width: "250px", zIndex:"10"}}>
            <i class="fa-solid fa-square-check fa-sm mx-2" style={{color: "#37b637"}}></i> {alertText} Successfully
            </div>
        </div> : <div className='container'>
            <div class="alert alert-primary mx-5 position-absolute top-50 start-50 translate-middle " role="alert" style={{backgroundColor: "black",color: "Red",width: "250px", zIndex:"10"}}>
            <i class="fa-solid fa-xmark fa-sm mx-2" style={{color: "Red"}}></i> {alertText} 
            </div>
        </div>}
        </>
    )
}

export default Alert