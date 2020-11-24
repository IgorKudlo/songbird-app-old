import React, {useState, useEffect} from 'react'
import Header from './components/header/Header'
import GameOver from './components/gameOver/GameOver'
import Question from "./components/question/Question"
import Answer from './components/answer/Answer'
import './App.scss'

function App() {

  const [birds, setBirds] = useState([]);

  useEffect(() => {
    fetch('https://birds-app-779ec.firebaseio.com/birds.json')
      .then(response => response.json())
      .then(json => setBirds(json))

  }, [])

  return (
    <div className="container">
      {/*{
        birds.length > 0 ? birds[0].map(bird => <p>{bird.name}</p>) : null
      }*/}
      <Header />
      <GameOver />
      <Question />
      <Answer birdsData={birds[0]} />
      <button className="btn">Next Level</button>
    </div>
  );
}

export default App;
