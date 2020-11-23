import React from 'react'
import Header from './components/header/Header'
import GameOver from './components/gameOver/GameOver'
import Question from "./components/question/Question";
import Answer from './components/answer/Answer'

import './bootstrap.min.css'
import './App.css'

const birds = fetch('https://birds-app-779ec.firebaseio.com/birds.json')
  .then(response => response.json())
  .then(json => json)
  .catch(error => console.log(error))

function App() {
  return (
    <div className="container">
      <Header />
      <GameOver />
      <Question />
      <Answer />
      <button className="btn">Next Level</button>
    </div>
  );
}

export default App;
