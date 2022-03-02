import styles from './Animals.module.css';
import { Link } from 'react-router-dom';


export default function Animals(props) {
  return (
    <div >
      {
        props.currentUser ?
          <>
            <Link to='/animals/add'><button className={styles.animal_button}>Add more animals</button></Link>
          </>
          :
          <>
          <h4>Please login to add an animal</h4>
          </>
      }
    <div className={styles.animals}>
      {props.animals.map(animal => (
        <Link className={styles.animal_list} key={animal.id} to={`/animals/${animal.id}`} >
          <img className={styles.animal_img} src={animal.img_url} alt={animal.name}/>
          <h4 className={styles.animal_name}>{animal.name}</h4>
        </Link>
      ))}
        </div>
    </div>
  )
}
