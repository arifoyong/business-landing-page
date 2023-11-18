import React from 'react'
import { clients } from '../constants'
import styles from '../styles'

const Clients = () =>  (
  <section id="clients"
    className={`${styles.flexCenter} my-4`}
  >
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id}
          className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] hover:bg-white hover:opacity-50 py-2 rounded-lg`}
        >
          <img src={client.logo} alt='alt'
            className='sm:w-[192px] w-[100px] object-contain' />
        </div>
      ))}
    </div>
  </section>
)

export default Clients