import React from 'react'
import Choice from './Choice'
import { useState,createContext } from 'react'

// i create a context here so i do not have to do prop drilling. 
export const UserContext = createContext();

const Game = () => {
  // different state variables to keep track of these three things.
  const[playerChoice, setPlayerChoice] = useState(null);
  const[computerChoice, setComputerChoice] = useState(null);
  const[result, setResult] = useState(null);

  // an array of the choice this game needs.
  const choices = ['rock', 'paper', 'scissors'];

  // this function takes a parameter of value which the players choice.
  const handleClick = (value) => 
  {
    // This function now updates the state with the value the player chooses.
    setPlayerChoice(value);
    // since now i wanted to play against a computer, its choices is random, 
    // using math equation times the length of array and that will give the random number. 
    // which will assigned to the randomChoice variable. 
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    // this set function will update the state variable computers choice.
    setComputerChoice(randomChoice);
     
    // now taking the value that the user choose set up a condition to check who looses and who wins. 
    // and with this we use the set function of result to update the state variable result.
    if ((value === 'rock' && randomChoice === 'scissors') || 
    (value === 'paper' && randomChoice === 'rock') || 
     (value === 'scissors' && randomChoice === 'paper'))
      { setResult('You win!');}
      else if ((value === randomChoice))
      {setResult('It is a tie!');}
      else {setResult('You lose!'); }
}
// object that contains function and variable that need to pass to another component. instead of prop drilling. 
const contextValue = {
        playerChoice,
        computerChoice,
        result,
        handleClick,
   }

  return (
    // object now passed to provider as prop value to used in other components. 
    <UserContext.Provider value={contextValue}>
       <div className='game'>
        <h1 className='head'>ROCK, PAPER, SCISSORS GAME: </h1>
        <Choice/> 
    </div>
    </UserContext.Provider>
  );
  
}


export default Game;

