import styles from './DonateNew.module.css'
import { useState } from 'react'

export default function DonateNew(props) {

  const [name, setName] = useState('')
  const [desciption, setDesciption] = useState('')
  const [logo_url, setLogo_url] = useState('')
  const [link, setLink] = useState('')

  return (

        <div className={styles.donate_form}>
        <form className={styles.donate_form_input} onSubmit={(e) => {
          e.preventDefault()
          const donate = {
            name, desciption, logo_url, link
          }
          props.handleNewDonate(donate)
        }}>
          <h2>Share a trustful fund</h2>
          <input className={styles.donate_input}
            type='text'
            placeholder='Organization name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <input className={styles.donate_input}
            type='text'
            placeholder='Description'
            value={desciption}
            onChange={(e)=>setDesciption(e.target.value)}
          />
          <br />
          <input className={styles.donate_input}
            type='text'
            placeholder='Logo image url'
            value={logo_url}
            onChange={(e)=>setLogo_url(e.target.value)}
          />
          <br />
          <input className={styles.donate_input}
            type='text'
            placeholder='Link to source'
            value={link}
            onChange={(e)=>setLink(e.target.value)}
          />
          <br />
          <button className={styles.donate_button}>Add</button>
          </form>
        </div>
        
    
  )
}
