import './Cart.css';

import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';

import Card from './UI/Card';

function Backdrop(props) {
    return <div onClick={props.onClick} className='backdrop'></div>
}

function ModalOverlay(props) {
    let content = props.orders.length >0?
        <Card className="modal">
            <header>
                <h2>Cart Content</h2>
            </header>
            <div>
                {props.orders.map(order=>{
                    return <div key={order.name}>
                        <h3>{order.name}</h3>
                        <p>{order.number}</p>
                    </div>
                })}
            </div>
        </Card> : 
        
        <Card className="modal">
            <p className='warning'>Empty Cart</p>
        </Card>
    return content
}

export default function Cart(props) {
    const [orders,setOrders] = useState([

    ]);

    const [isModalVisible,setIsModalVisible] = useState(false);

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

    function toggleModal() {
        setIsModalVisible(!isModalVisible);
    }

    return(
        <React.Fragment>
            <div className='cart-container' onClick={toggleModal}>
                <h3>Your Cart <span>{calculateOrders()}</span> </h3>
            </div>    
            
            { isModalVisible && ReactDOM.createPortal(<Backdrop onClick={toggleModal} />,document.getElementById('backdrop-root'))}

            { isModalVisible && ReactDOM.createPortal(<ModalOverlay orders={orders} />,document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}