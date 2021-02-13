import {useState} from 'react';
import CardContainer from './CardContainer';
import Header from './Header';

const GameBoard = () => {
    const [score, setScore] = useState(0)
    const [highestScore, setHighestScore] = useState(0)
    const [selected, setSelected] = useState([])

    const handleClick = (elem) =>{
        if(!selected.includes(elem)){
          setSelected([...selected, elem]) 
          setScore(score+1)  
        }
        else reset()
    }
    const reset = () =>{
        if(score>highestScore)
            setHighestScore(score)

        setScore(0)
        setSelected([])
    }
    return ( 
        <div className="game-board">
            <Header score = {score} 
            highestScore = {highestScore}/>
            <CardContainer
            handleClick = {handleClick}
            score = {score}
            />

        </div>
         );
}
 
export default GameBoard;