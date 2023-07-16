import './NavBar.css';

import Cart from './Cart';


export default function NavBar() {
    return(
        <nav className='navbar'>
            <h1 className='logo'>ReactMeals</h1>
            <Cart />
        </nav>
    )
}