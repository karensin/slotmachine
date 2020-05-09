import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// Build a slots machine in react.

// The machine has 3 different symbols. Each time you pull it, all 3 symbols are randomized. If theres a 3 in a row it is considered a win.

// Make a react page that has this machine. It should have a way to pull it, and a display that shows the 3 symbols.

// Extra credit: make the spinning animated.

// class Slot {
//   constructor(val) {
//     this.val = val
//   }
// }

function App() {
  const [slots, setSlots] = useState([null, null, null]) //this will store all the slots after randomized 
  const [display, setDisplay] = useState([])
  const [message, setMessage] = useState('idkman')

  function randomized() {
    let copySlots = slots
    let temptSlot
    let slotLib = ['@', '#', '7']
    let index = Math.floor(Math.random(3) * Math.floor(3))

    temptSlot = slotLib[index]
    copySlots.push(temptSlot)
    setSlots(copySlots)

  }


  function onClickPull() { //onclick
    let copySlots = slots
    if (slots.length) {
      copySlots = []
    }
    for (let i = 0; i <= 2; i++) {
      randomized() //gets called 3 times
    }
    if (slots.length === 3) {
      copySlots = slots
      checkWinner(copySlots)
    }
    setDisplay(slots)
    setSlots([])
  }

  function checkWinner(copySlots) {
    let tempSlots = [...copySlots]
    let temp = tempSlots.pop()
    while (tempSlots.length) {
      let symbol = tempSlots.shift()
      if (symbol !== temp) {
        setMessage('no winner')
        return
      }
    }
    setMessage('got winner')
  }
  //slow machine should have 3 items per col n 3 cols total 
  //a function to generate random this should get called 3 times per pull 
  //a button to pull and will call generate random function 
  //return a message after every pull win/no win
  //make spinning animated?

  return (
    <div className="App">
      Slot machine
      <button onClick={onClickPull}> </button>
      {/* <h1>{slots[0]}henlo why no show</h1> */}
      {display.map((item) => <h1> {item} </h1>)}
      <h2> {message}</h2>
    </div>

  );
}

export default App;
