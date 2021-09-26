import React from 'react'

import styles from './Games.module.css'
import { NavLink } from 'react-router-dom';

import imgCheckCorrect from '../../assets/check-the-correct-one.svg';
import imgSelectTranslation from '../../assets/select-translation.svg';
import imgSprintGuess from '../../assets/sprint-guess.svg';
import imgPutTranslation from '../../assets/put-translation.svg';
import imgSpeakAndCheck from '../../assets/speak-and-check.svg';
import imgSprintListen from '../../assets/listen-sprint.svg';
import imgRememberTranslation from '../../assets/remember-translation.svg';
import imgWriteTranslation from '../../assets/write-translation.svg';
import imgListenAndGuess from '../../assets/listen-and-guess.svg';

const Games = () => {

    const GAMES = [
        {img: imgCheckCorrect, path: 'check-it', name: 'Check correct word', description: "Check correct word"},
        {img: imgWriteTranslation, path: 'write-it', name: 'Write correct word', description: "Write correct word"},
        {img: imgSelectTranslation, path: 'check-it', name: 'Check correct word', description: "Check correct word"},
        {img: imgSprintGuess, path: 'check-it', name: 'Check correct word', description: "Check correct word"},
        {img: imgPutTranslation, path: 'check-it', name: 'Check correct word', description: "Check correct word"},
        {img: imgSpeakAndCheck, path: 'check-it', name: 'Check correct word', description: "Check correct word"},
        {img: imgSprintListen, path: 'check-it', name: 'Check correct word', description: "Check correct word"},
        {img: imgRememberTranslation, path: 'check-it', name: 'Check correct word', description: "Check correct word"},
        {img: imgListenAndGuess, path: 'check-it', name: 'Check correct word', description: "Check correct word"},
    ]
   

    return(
       <section className={styles.gameContainer}>
           {GAMES.map((game, index) => (
               <NavLink key={index} to={'game/' + game.path}>
                    <div className={styles.gameBlock}>
                        <div>
                            <h2>{game.name}</h2>
                            <p>{game.description}</p>
                        </div>
                            <img src={game.img} alt="Картинка" />
                    </div>
               </NavLink>
           ))}
           
       </section>
    )
}
export default Games