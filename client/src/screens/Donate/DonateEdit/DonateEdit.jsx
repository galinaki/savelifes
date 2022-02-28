import styles from './DonateEdit.module.css'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

export default function DonateEdit(props) {
  const [name, setName] = useState('')
  const [desciption, setDesciption] = useState('')
  const [logo_url, setLogo_url] = useState('')
  const [link, setLink] = useState('')

  const navigate = useNavigate()

  const {id} = useParams()

  useEffect(() => {
    const foundDonate = props.donates.find(donate => {
      return donate.id === parseInt(id)
    })
    if (foundDonate) {
      setName(foundDonate.name)
      setDesciption(foundDonate.desciption)
      setLogo_url(foundDonate.logo_url)
      setLink(foundDonate.link)
    }
  }, [id, props.donates ])

  return (
    <div className={styles.donate_form}>
      <form className={styles.donate_form_input} onSubmit={(e) => {
        e.preventDefault()
        const donate = {
          name, desciption, logo_url, link
        }
        props.handleEdit(id, donate)
        navigate('/donate')
      }}>
        <h2>Correct a Fund</h2>
        <input className={styles.donate_input}
          type='text'
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <br />
        <textarea className={styles.donate_input}
          rows="4"
          cols="50"
          type='text'
          value={desciption}
          onChange={(e)=>setDesciption(e.target.value)}
        />
        <br />
        <textarea className={styles.donate_input}
          rows="4"
          cols="50"
          type='text'
          value={logo_url}
          onChange={(e)=>setLogo_url(e.target.value)}
        />
        <br />
        <textarea className={styles.donate_input}
          rows="4"
          cols="50"
          type='text'
          value={link}
          onChange={(e)=>setLink(e.target.value)}
        />
        <br />
        <button className={styles.donate_button}>Edit</button>
      </form>
    </div>
  )
}
