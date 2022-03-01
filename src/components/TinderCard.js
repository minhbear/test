import React, {useState} from 'react'
import Card from './tinderComponents/Card';
import BtnCard from './tinderComponents/BtnCard';
import './style/TinderCard.css';

export default function TinderCard() {

    const data = [
        {
            name: 'Nguyen Quang Nhat Minh',
            age: 20,
        },
        {
            name: 'Thu Hoai',
            age: 21
        },
        {
            name: 'vuong',
            age: 18 
        }
    ]
    
    const [close, setClose] = useState(false);
    const handleCloseBtn = () => {
        if(close === false){
            setClose(true);
        }

        setClose(false);
    }
    const [heart, setHeart] = useState(false);
    const handleHeartBtn = () => {
        if(heart === false){
            setHeart(true);
        }

        setHeart(false);
    }
    return (
      <div id='container'>
          <Card data={data}/>
          <BtnCard handleHeartBtn={handleHeartBtn} handleCloseBtn={handleCloseBtn}/>
      </div>
    )
}
