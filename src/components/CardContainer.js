import {useState, useEffect} from 'react';
import blueDiamond from '../assets/blue-diamond.png';
import goldDiamond from '../assets/gold-diamond.png';
import goldRing from '../assets/gold-ring.png';
import greenDiamond from '../assets/green-diamond.png';
import heartDiamond from '../assets/heart-diamond.png';
import necklaceJwellery from '../assets/necklace-jewellary.png';
import pinkDiamond from '../assets/pink-diamond.png';
import purbleDiamond from '../assets/purble-diamond.png';
import silverDiamond from '../assets/silver-diamond.png';
import Card from './Card'

    const CardContainer = ({handleClick, score}) => {
       
        const [cards, setCards] = useState([
            {
                imgSource :blueDiamond,
                title:'Blue diamond',
                color:'#2a2ca3'
            },
            {
                imgSource :goldDiamond,
                title:'Gold Diamond',
                color:'#c99400'
            },
            {
                imgSource :purbleDiamond,
                title:'Purble diamond',
                color:'#501f7a'
            },
            {
                imgSource :pinkDiamond,
                title:'Pink diamond',
                color:'#ed3eb6'
            },
            {
                imgSource :heartDiamond,
                title:'Heart diamond',
                color:'#d41515',
            },
            {
                imgSource :greenDiamond,
                title:'Green diamond',
                color:'#0b5902',
            },
            {
                imgSource :necklaceJwellery,
                title:'Necklace jewellery',
                color:'#ed3eb6'
            },
            {
                imgSource :goldRing,
                title:'Gold ring',
                color:'#d41515',
            },
            {
                imgSource :silverDiamond,
                title:'Silver diamond',
                color:'#0057c9'
            }
        ])
    const randomize = (arr) =>{
        for(let i = arr.length-1; i>0; i--){
            let randomIndex = Math.floor(Math.random()*i);
            [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
        }
    }
   
    useEffect(()=>{
       const newCards = [...cards];
        randomize(newCards)
        setCards(newCards);
    }, [score])
    return ( 
        <div className="card-container">
           {
               cards.map((card, i)=> <Card
                key = {i}
                data = {card}
                handleClick = {handleClick}
               />)
           } 
        </div>
     );
}
 
export default CardContainer;