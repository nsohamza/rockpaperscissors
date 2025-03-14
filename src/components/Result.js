import React,{useContext} from 'react';
import './style.css';
import {UserContext} from './Game';

// RESULTS COMPONENT TO SHOW THE RESULTS
const Result = () => {
  const {playerChoice,computerChoice,result} = useContext(UserContext);
  return (
    <div>
      <h1>RESULTS</h1>
      <h2>Player Choice: {playerChoice}</h2>
      <h2>Computer Choice: {computerChoice}</h2>
      <h2> Result: {result}</h2>

    </div>
  )
}

export default Result;