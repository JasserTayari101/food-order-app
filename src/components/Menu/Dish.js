import './Dish.css';
import { useState } from "react"


export default function Dish({info,onAdd}) {
    const [amount,setAmount] = useState(0);

    function amountChangeHandler(e) {
        setAmount(e.target.value);
    }

    function buttonAddHandler(){
        onAdd({
            name:info.name,
            number:amount
        });
        setAmount(0);
    }

    return(
        <div className="dish-container">
            <div>
                <h3 className='dish-title'>{info.name}</h3>
                <p className='dish-description'> {info.description} </p>
                <span className='dish-price'> {info.price} </span>
            </div>
            <div>
                <label className='dish-amount-label' htmlFor={`${info.name}-input`}>Amount</label>
                    <input className='dish-amount-input' type="number" id={`${info.name}-input`} value={amount} onChange={amountChangeHandler} />
                <button className='dish-add-btn' onClick={buttonAddHandler}>+ Add</button>
            </div>
        </div>
    )
}