import styles from './Animals.module.css';
import { Link } from 'react-router-dom';


export default function Animals(props) {
  return (
      <div className={styles.animals}>
      {props.animals.map(animal => (
        <Link className={styles.animal_list} key={animal.id} to={`/animals/${animal.id}`} >
          <img className={styles.animal_img} src={animal.img_url} alt={animal.name}/>
          <h4>{animal.name}</h4>
        </Link>
      ))}
    </div>
  )
}
