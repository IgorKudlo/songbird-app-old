import React, {Fragment, useEffect, useState} from 'react'
import Header from '../components/header/Header'
import GameOver from '../components/gameOver/GameOver'
import Question from '../components/question/Question'
import Answer from '../components/answer/Answer'

export const Quiz = () => {


  const [birds, setBirds] = useState([]);

  useEffect(() => {
    fetch('https://birds-app-779ec.firebaseio.com/birds.json')
      .then(response => response.json())
      .then(json => setBirds(json))

  }, [])

  return (
    <Fragment>
      {/*{
        birds.length > 0 ? birds[0].map(bird => <p>{bird.name}</p>) : null
      }*/}
      <Header />
      <GameOver />
      <Question />
      <Answer birdsData={birds[0]} />
      <button className="btn">Next Level</button>
    </Fragment>
  );

}