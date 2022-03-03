import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './AnimalDetails.module.css'

export default function AnimalDetails(props) {

  const [animal, setAnimal] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const foundAnimal = props.animals.find(animal => {
      return animal.id === parseInt(id)
    })
    setAnimal(foundAnimal)
  }, [id, props.animals])

  return (
    <div className={styles.animal_details}>
      {
        animal?.id ? 
          <>
            <img className={styles.animal_img} src={animal.img_url} alt={animal.name} />
            <h3>{animal.name}</h3>
            <h4>Population: {animal.population}</h4>
            <h4>Area: {animal.habitats}</h4>
            <a className={styles.animal_link}
              href={animal.link}>
              Click here to see more information
            </a>
            <h5>{animal.location}</h5>
            {/* <h5>{animal.latitude}</h5>
            <h5>{animal.longitude}</h5> */}
            
            {
              props.currentUser?.id === animal.user_id ?
              <>
                <Link 
                  animal={animal}
                  to={`/animals/${animal.id}/edit`}>
                  <button className={styles.animal_button}>Edit</button>
                </Link>
                  <button className={styles.animal_button}
                  onClick={() => props.handleDelete(animal.id)}>Delete</button>
              </>
              :
              null
            }
          </>
          :
          <h6>Nothing found</h6>
      }
    </div>
  )
}
