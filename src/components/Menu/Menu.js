import { useState } from "react";

import Card from "../UI/Card";
import Dish from './Dish';

export default function Menu(props) {
    const [dishes,setDishes] = useState([
        {id:0,name:'sushi',description:'finest fish and veggies',price:22.99},
        {id:1,name:'schnitzel',description:'a german speciality!',price:16.50},
    ]);

    return(
        <Card className="menu-container">
            {dishes.map(dish=>{
                return <Dish key={dish.id} info={dish} onAdd={props.onDishAdd} />
            })}
        </Card>
    )
}