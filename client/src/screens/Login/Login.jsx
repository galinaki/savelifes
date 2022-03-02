import {useState} from 'react'
import { loginUser } from '../../services/userConfig'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'

export default function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <form className={styles.animal_form} onSubmit={async (e) => {
      e.preventDefault()
      const user = {
        username,
        password
      }
      const resp = await loginUser(user)
      props.setCurrentUser(resp)

      navigate('/animals')

    }}>
      <div className={styles.animal_form_input}>
      <input className={styles.animal_input} type='text' onChange={(e) => setUsername(e.target.value) } value={username} />
      <input className={styles.animal_input} type='password' onChange={ (e) => setPassword(e.target.value)} value={password} />
        <button className={styles.animal_button}>Login</button>
        </div>
    </form>
  )
}