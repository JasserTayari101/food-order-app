import './Cart.css';

import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

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
            <div className="modal-content">
                {props.orders.map(order=>{
                    return <div key={order.name} className="dish-content">
                        <p>{order.number}</p>
                        <span className="price" >x ${order.price}</span>
                        <h3>{order.name}</h3>
                        <span className='dish-total'>{order.name}'s Total: ${Number(order.number*order.price).toFixed(2)}</span>
                        
                        <button onClick={()=>props.onClose(order.name)}><FontAwesomeIcon icon={faXmark} size='xl' style={{color:'red'}} /></button>
                    </div>
                })}
                <h2>Total: ${Number(props.orders.reduce((prevV,accum)=>prevV+accum.number*accum.price,0)).toFixed(2)}</h2>
            </div>
        </Card> : 
        
        <Card className="modal">
            <p className='warning'>Empty Cart</p>
        </Card>
    return content
}


export default function Cart(props) {
    const [orders,setOrders] = useState([]);
    
    const [isModalVisible,setIsModalVisible] = useState(false);
    
    const [isBumped,setIsBumped] = useState(false);
    
    function dishClickHandler(nameToDelete) {
        let ordersCopy = [...orders];
        let filteredCopy = ordersCopy.filter(order=>order.name!==nameToDelete);
        setOrders(filteredCopy);
    }
    

    useEffect(()=>{
        if(props.addDish!==null){   //to avoid exectution on mount
            setIsBumped(true);  //bump effect on order add
            setTimeout(()=>{
                setIsBumped(false);
            },500);

            let ordersCopy = [...orders];
            let found = false;
    
            ordersCopy.map(order=>{
                if(order.name === props.addDish.name){
                    found = true;
                    order.number+=Number(props.addDish.number);
                }
            })
            if(!found){
                ordersCopy.push({name:props.addDish.name,number:Number(props.addDish.number),price:props.addDish.price})
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
            <div className={`cart-container ${isBumped?'bump':''}`} onClick={toggleModal}>
                <h3>Your Cart <span>{calculateOrders()}</span> </h3>
            </div>    
            
            { isModalVisible && ReactDOM.createPortal(<Backdrop onClick={toggleModal} />,document.getElementById('backdrop-root'))}

            { isModalVisible && ReactDOM.createPortal(<ModalOverlay orders={orders} onClose={dishClickHandler} />,document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}