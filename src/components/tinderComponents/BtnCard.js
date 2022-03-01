import React,{ useState } from 'react'

import { GrClose } from "react-icons/gr";
import { BsHeartFill } from "react-icons/bs";


export default function BtnCard({ handleCloseBtn, handleHeartBtn }) {


    return (
        <div id='btn'>
            <button className='btn-list' 
              onClick={() => handleCloseBtn()}
            >
                <GrClose 
                    color = 'blue'
                    fontSize = {14}
                    
                />
            </button>
            <button className='btn-list'
                onClick={() => handleHeartBtn()}
            >
                <BsHeartFill 
                    color = 'green'
                    fontSize = {14}
                    
                />
            </button>
        </div>
    )
}
