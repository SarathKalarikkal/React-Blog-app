import React from 'react'
import people from "../../assests/people.png"
import ai from "../../assests/ai.png"
import "./Header.css"

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something Amazing with GPT-3 OpenAI</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dignissimos nemo sint accusantium cum natus animi doloremque, hic inventore laborum.</p>
        <div className='gpt3__header-content__input'>
          <input type="email"  placeholder='Your email Address'/>
          <button type='button'>Get started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header
