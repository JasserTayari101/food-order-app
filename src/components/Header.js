import './Header.css';

import meals from '../assets/meals.jpg';
import Card from './UI/Card';

export default function Header() {
    return(
        <div className='header'>
            <img src={meals} alt="meals" />
            <Card className='info-box-card'>
                <section className='info-box'>
                    <h2>Delicious Food, Delivered To You</h2>
                    <p>Choose your favorite meal from our broad selection meals and enjoy a delecious lunch or dinner at home.</p>
                    <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
                </section>
            </Card>
        </div>
    )
}