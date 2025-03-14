import React,{useContext} from 'react'
import './style.css'
import Result from './Result';
import { UserContext} from './Game';

// PLAYERS CHOICE COMPONENT
const Choice = () => {
  const {handleClick} = useContext(UserContext); // through use context can now access this function from another comp.

  return (
    <div className='choice'>
        <h1>CHOOSE YOUR NEXT MOVE WISELY: </h1>
        <button className='rock' onClick={() => handleClick('rock')}>🪨 Rock</button>
        <button className='paper' onClick={() => handleClick('paper')}>📜 Paper</button>
        <button className='scissors' onClick={() => handleClick('scissors')}>✂️ Scissors</button>
        <Result />
    </div>
  )
}

export default Choice;
