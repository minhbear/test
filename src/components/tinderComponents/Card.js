import React from 'react'

export default function Card({ data }) {
  
    return (
      <>
      {
        data.map((dt, index) => 
        <div key={index}>
          <p>{dt.name}</p>
          <p>{dt.age}</p>
        </div>)
      }
      </>
  )
}
