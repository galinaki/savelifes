import React, { useState } from 'react'
import styles from './AnimalForm.module.css'
import { useNavigate } from 'react-router'
import AnimalForm from '../../components/AnimalForm/AnimalForm'

export default function AnimalCreate(props) {

  const [name, setName] = useState('')
  const [img_url, setImg_url] = useState('')
  const [population, setPopulation] = useState('')
  const [habitats, setHabitats] = useState('')
  const [link, setLink] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const navigate= useNavigate()

  return (
    <div className={styles.animal_form}>
      <form className={styles.animal_form_input} onSubmit={(e) => {
          e.preventDefault()
          const animal = {
            name, img_url, population, habitats, link, latitude, longitude
          }
          props.handleCreate(animal)
        }}>
          <h2>Add an Animal</h2>
          <input className={styles.animal_input}
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <input className={styles.animal_input}
            type='text'
            placeholder='Image url'
            value={img_url}
            onChange={(e)=>setImg_url(e.target.value)}
          />
          <br />
          <input className={styles.animal_input}
            type='number'
            placeholder='Population'
            value={population}
            onChange={(e)=>setPopulation(e.target.value)}
          />
          <br />
          <input className={styles.animal_input}
            type='text'
            placeholder='Habitats'
           value={habitats}
            onChange={(e)=>setHabitats(e.target.value)}
          />
          <br />
          <input className={styles.animal_input}
            type='text'
            placeholder='Link to main source'
          value={link}
            onChange={(e)=>setLink(e.target.value)}
          />
          <br />
          <input className={styles.animal_input}
            type='text'
            placeholder='Latitude location'
            value={latitude}
            onChange={(e)=>setLatitude(e.target.value)}
          />
          <br />
          <input className={styles.animal_input}
            type='text'
            placeholder='Longitude location'
           value={longitude}
            onChange={(e)=>setLongitude(e.target.value)}
          />
          <br />
          <button className={styles.animal_button}>Add</button>
          </form>
        </div>
  )
}
