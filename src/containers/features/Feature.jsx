import React from 'react'
import "./Feature.css"
import  Feature  from '../../components/features/Feature'
import { featureDatas } from './featureDatas'


const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
       <div  className="gpt3__features-heading">
           <h1 className='gradient__text'>The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen. </h1>
          <p>Request early access to get started</p>
       </div>
       <div className='gpt3__features-containers'>
        {
          featureDatas.map((item,index)=>{
           return <Feature title={item.title} text={item.text} key={item.title + index}/>
          })
        }
       </div>
    </div>
  )
}

export default Features
