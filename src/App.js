import React,{useState} from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Menu from './components/Menu/Menu';

function App() {
  const [addDish,setAddDish] = useState(null);
  function addDishHandler(dish) {
    setAddDish(dish);
  }
  return (
    <div className='app-container'>
      <NavBar addDish={addDish} />
      <Header />
      <Menu onDishAdd={addDishHandler} />
    </div>
  )
}

export default App;
