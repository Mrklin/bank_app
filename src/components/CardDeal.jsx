import React from 'react'
import styles,{ layout } from '../style'
import { card } from '../assets'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden' /> in few easy steps
      </h2>
      <p className={`${styles.paragraph} max-w-[430px] mt-5`}>
          Acur turtur purus in mattis at sed integer faucibus. 
          Aliquet quia aliquet eget mauris tortor. c Aliquet utrices ac, ameta.
      </p>
      <Button style='mt-10' />
    </div>

    </section>
  )
}

export default CardDeal