import React, { useEffect, useState } from 'react'
import StoreItem from './StoreItem';

const Store = () => {

    const [Products, setProducts] = useState([])

    const fetchdata = async () => {
        const url = `https://dummyjson.com/products?&limit=100`;
        let data = await fetch(url);
        let parseData = await data.json();
        setProducts(parseData.products)
        console.log(Products);

    }

    useEffect(() => {
        fetchdata();
        //eslint-disable-next-line
    }, [])




    return (
        <div className='container'>
            <h1 className='fw-bold my-4 text-decoration-underline'>TOP TRENDING PRODUCTS</h1>
            <div className="row">
                {Products.map((x) => {
                    return <div className="col-md-4 my-3">
                        <StoreItem item={x}/>

                    </div>
                })}
            </div>
        </div>
    )
}

export default Store