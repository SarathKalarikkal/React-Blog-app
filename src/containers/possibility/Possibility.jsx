import React from 'react'
import "./Possibility.css"
import possibilityImage from "../../assests/possibility.png"

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
       <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
       </div>
       <div className='gpt3__possibility-content'>
         <h4>Request Early Access to Get Started</h4>
         <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit maxime doloribus obcaecati, omnis modi numquam. dolor sit amet consectetur adipisicing elit. Odit maxime doloribus obcaecati, omnis modi numquam. dolor sit amet consectetur adipisicing elit. Odit maxime doloribus obcaecati, omnis modi numquam.</p>
         <h4>Request Early Access to Get Started</h4>
       </div>
    </div>
  )
}

export default Possibility
