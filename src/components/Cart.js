import './Cart.css';

import {useState} from 'react';

export default function Cart() {
    const [orders,setOrders] = useState([
        {name:'apple',number:5},
        {name:'sushi',number:3},
        {name:'brika',number:2}
    ]);
    
    function calculateOrders() {
        let orderNumber = orders.reduce(
            (accum,currentV)=> accum+currentV.number,0);
        return orderNumber;
    }

    return(
        <div className='cart-container'>
            <h3>Your Cart <span>{calculateOrders()}</span> </h3>
        </div>    
    )
}