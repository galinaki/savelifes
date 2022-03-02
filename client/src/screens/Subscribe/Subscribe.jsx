import { useState, useEffect } from 'react'
import { registerUser } from '../../services/userConfig'
import { useNavigate } from 'react-router-dom'
import styles from '../Login/Login.module.css'

export default function Subscribe(props) {

  const [validationMessage, setValidationMessage] = useState("")
  const [valid, setValid] = useState(false);
  const [hidePassword, setHidePassword] = useState("password");
  const [oldPassword, setOldPassword] = useState("text");

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const Toggle = (e) => {
    e.preventDefault();
    let temp = hidePassword;
    setHidePassword(oldPassword);
    setOldPassword(temp);
  }
  useEffect(() => {
    // console.log("validator");
    // const res = signUp(newUser);
    // console.log(res);
    checkIfValid();
  }, [password, confirmPassword]);

  const checkIfValid = () => {
    if (password === "" || confirmPassword === "") {
      setValidationMessage("");
      setValid(false);
    } else if (password.length < 6) {
      setValidationMessage("Short password! Must be at least 6 characters");
    } else if (password !== confirmPassword) {
      setValidationMessage("Passwords must much!");
      setValid(false);
    } else {
      setValidationMessage("Password match!");
      setValid(true);
    }
  }

  return (
    <form className={styles.animal_form}  onSubmit={async (e) => {
      e.preventDefault()
      const user = {
        username,
        email,
        firstname,
        lastname,
        password,
        confirmPassword
      }
      const resp = await registerUser(user)
      props.setCurrentUser(resp)

      navigate('/')

    }}>
      <div className={styles.animal_form_input}>
      <h4>Create an account</h4>
      <input className={styles.animal_input} type='text' onChange={(e) => setUsername(e.target.value)} value={username} placeholder='username' />
      <br />
      <input className={styles.animal_input} type='text' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='email'/>
      <br />
      <input className={styles.animal_input} type='text' onChange={(e) => setFirstname(e.target.value)} value={firstname} placeholder='First name' />
      <br />
      <input className={styles.animal_input} type='text' onChange={(e) => setLastname(e.target.value)} value={lastname} placeholder='Last name' />
      <br />
      <input className={styles.animal_input} type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' />
      <br />
      <input className={styles.animal_input} type='password' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder='Confirm password' />
      <br />
      <h5>{validationMessage}</h5>
      

        <button className={styles.animal_button}>Sign Up</button>
        </div>
    </form>
  )
}