import './Cart.css';

import {useState,useEffect} from 'react';

export default function Cart(props) {
    const [orders,setOrders] = useState([
        {name:'apple',number:5},
        {name:'sushi',number:3},
        {name:'brika',number:2}
    ]);

    useEffect(()=>{
        if(props.addDish!==null){
            let ordersCopy = [...orders];
            let found = false;
    
            ordersCopy.map(order=>{
                if(order.name === props.addDish.name){
                    found = true;
                    order.number+=Number(props.addDish.number);
                }
            })
            if(!found){
                ordersCopy.push({name:props.addDish.name,number:Number(props.addDish.number)})
            }
    
            setOrders(ordersCopy);
        }

    },[props.addDish]);

    function calculateOrders() {    //sum all number property of orders
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