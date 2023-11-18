import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../styles'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      {/* Left */}
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden"/> in a few steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With hboss, deals will be pushed to you. You simply just need to check your notification & accept deals that you like.
        </p>
        <Button styles='mt-10'/>
      </div>

      {/* Right */}
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt='card' 
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal