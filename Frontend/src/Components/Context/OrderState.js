import React, { useState } from 'react'
import OrderContext from './OrderContext';

const OrderState = (props) => {

    const [currentItem, setscurrentItem] = useState({});
    const [Orderlist, setsOrderlist] = useState([]);
    const [Cartlist, setCartlist] = useState([]);
    const [loading, setloading] = useState(false);
    const [alert, setalert] = useState(false);
    const [alertText, setalertText] = useState("");

    const host = "https://negi-seller-backend.onrender.com";

    //Insert ORDER Details
    const AddOrder = async (item, quantity, pincode, address) => {

        try {

            const response = await fetch(`${host}/api/orders/insert`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                },
                body: JSON.stringify({ name: item.title, discription: item.description, brand: item.brand, imgUrl: item.thumbnail, quantity: quantity, pincode: pincode, address: address })
            });
            const data = await response.json();
            // console.log(data);
            if (data.success === true) {
                setalert(true);
                setalertText("Order")
                setTimeout(() => {
                    setalert(false)
                }, 2500)
            }

        } catch (error) {
            console.log(error);
        }
    }

    //Fetch Order Details
    const FetchOrder = async () => {

        setloading(true);
        try {

            const response = await fetch(`${host}/api/orders/fetch`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                },
            });
            const data = await response.json();
            if (data.success === true) {
                setsOrderlist(data.myorder);
                // console.log(data.myorder);
            }
        } catch (error) {
            console.log(error);
        }
        setloading(false);
    }

    // Cancle Order
    const DeleteOrder = async (id) => {

        try {
            const response = await fetch(`${host}/api/orders/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                }
            });
            const data = await response.json();
            console.log(data);
            if (data.success === true) {
                const newlist = Orderlist.filter((x) => { return x._id !== id });
                setsOrderlist(newlist);
                setalert(true);
                setalertText("Order Cancle")
                setTimeout(() => {
                    setalert(false)
                }, 2500)
            }

        } catch (error) {
            console.log(error);
        }
    }

    //Insert  Cart Item
    const AddCart = async (item) => {

        try {

            const response = await fetch(`${host}/api/cart/insert`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                },
                body: JSON.stringify({ name: item.title, discription: item.description, imgUrl: item.thumbnail })
            });
            const data = await response.json();
            // console.log(data);
            if (data.success === true) {
                setalert(true);
                setalertText("Add To Cart")
                setTimeout(() => {
                    setalert(false)
                }, 2500)
            }

        } catch (error) {
            console.log(error);
        }
    }

    //Fetch Item From Cart
    const FetchCart = async () => {

        setloading(true);
        try {

            const response = await fetch(`${host}/api/cart/fetch`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                },
            });
            const data = await response.json();
            if (data.success === true) {
                setCartlist(data.mycart);
                // console.log(data.myorder);
            }
        } catch (error) {
            console.log(error);
        }
        setloading(false);
    }

    //Delete Cart Item
    const DeleteCart = async (id) => {

        try {
            const response = await fetch(`${host}/api/cart/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                }
            });
            const data = await response.json();
            console.log(data);
            if (data.success === true) {
                const newlist = Cartlist.filter((x) => { return x._id !== id });
                setCartlist(newlist);
                setalert(true);
                setalertText("Remove")
                setTimeout(() => {
                    setalert(false)
                }, 2500)
                
            }

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <OrderContext.Provider value={{ currentItem, Orderlist, setscurrentItem, Cartlist, AddOrder, FetchOrder, DeleteOrder, AddCart, FetchCart, DeleteCart, loading, setloading, alert, alertText, setalert, setalertText}}>
            {props.children}
        </OrderContext.Provider>
    )
}

export default OrderState;