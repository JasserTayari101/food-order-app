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
    }

    return(
        <div className="dish-container">
            <div>
                <h3>{info.name}</h3>
                <p> {info.description} </p>
                <span> {info.price} </span>
            </div>
            <div>
                <label htmlFor={`${info.name}-input`}>Amount</label>
                    <input type="number" id={`${info.name}-input`} value={amount} onChange={amountChangeHandler} />
                <button onClick={buttonAddHandler}>+ Add</button>
            </div>
        </div>
    )
}