import React from 'react'
import { selectProds } from './prodSlice';
import { useSelector } from 'react-redux';

const Cart = () => {
    const prods = useSelector(selectProds);
    return (
        <div>Cart
            <h1>Count:{prods.length}</h1>
        </div>
    )
}

export default Cart