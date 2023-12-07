import React from 'react'
import "./WhatGpt3.css"
import Feature from '../../components/features/Feature'

const WhatGpt3 = () => {
  return (
    <div className='section__padding' id='wgpt3'>
    <div className='gpt3__whatgpt3 section__padding'>
        <div className='gpt3__whatgpt3-features'>
          <Feature  title="What is GPT3?" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident debitis dolorum ex quisquam porro ratione quae laudantium officia, amet explicabo eius quam optio recusandae, quibusdam corporis dolore eveniet.ipsum dolor sit amet consectetur adipisicing elit. Provident debitis dolorum ex quisquam porro ratione quae laudantium officia, amet explicabo eius quam optio recusandae, quibusdam corporis dolore eveniet."/>
        </div>
        <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient__text'>The possibilities are beyond your imagniation</h1>
          <p>Explore the library</p>
        </div>
        <div className='gpt3__whatgpt3-container'>
          <Feature title="ChatBots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident debitis dolorum ex quisquam porro ratione quae laudantium officia, amet explicabo eius quam optio recusandae, quibusdam corporis dolore eveniet."/>
          <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident debitis dolorum ex quisquam porro ratione quae laudantium officia, amet explicabo eius quam optio recusandae, quibusdam corporis dolore eveniet."/>
          <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident debitis dolorum ex quisquam porro ratione quae laudantium officia, amet explicabo eius quam optio recusandae, quibusdam corporis dolore eveniet."/>
        </div>
    </div>
    </div>
  )
}

export default WhatGpt3