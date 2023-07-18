import './NavBar.css';

import Cart from './Cart';


export default function NavBar(props) {
    return(
        <nav className='navbar'>
            <h1 className='logo'>OrderMeals</h1>
            <Cart addDish={props.addDish} />
        </nav>
    )
}