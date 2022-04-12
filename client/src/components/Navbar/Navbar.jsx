import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className={styles.navbar}>
      
      <div>
        <Link className={styles.donate_link} to='/donate'>Donate</Link>
        <Link className={styles.donate_link} to='/animals/map'>Map</Link>
      </div>
      <Link to='/animals' className={styles.title}>Save Animals</Link>
      <div>
        {
          props.currentUser ? 
            <div className={styles.welcome_div}>
              <h3 className={styles.welcome}>Welcome, </h3><h3 className={styles.welcome_name}>{props.currentUser.firstname}</h3>
              <button className={styles.logout} onClick={props.logout}>Log out</button>
            </div>
            :
            <>
              <Link className={styles.login_link} to='/login'>Login</Link>
              <Link className={styles.sub_link} to='/subscribe'>Subscribe</Link>
            </>
        }
        </div>
    </div>
  )
}
