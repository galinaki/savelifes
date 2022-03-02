import React from 'react'
import { useState } from 'react'
import styles from '../../screens/AnimalCreate/AnimalForm.module.css'

export default function AnimalForm(props) {

  const {name, img_url,  population, habitats, link, latitude,
  longitude
  } = props.input

  return (
    <form className={styles.animal_form_input} onSubmit={props.handleSubmit}> 
      <input className={styles.animal_input}
        name='name'
        value={name}
        placeholder='name'
        onChange={props.handleTextInput}
      />
      <input className={styles.animal_input}
        name='img_url'
        value={img_url}
        placeholder='image link'
        onChange={props.handleTextInput}
      />
      <input className={styles.animal_input}
        name='population'
        value={population}
        placeholder='population'
        onChange={props.handleNumberInput}
      />
      <input className={styles.animal_input}
        name='habitats'
        value={habitats}
        placeholder='habitats'
        onChange={props.handleTextInput}
      />
      <input className={styles.animal_input}
        name='link'
        value={link}
        placeholder='link to source'
        onChange={props.handleTextInput}
      />
      <input className={styles.animal_input}
        name='latitude'
        value={latitude}
        placeholder='latitude'
        onChange={props.handleTextInput}
      />
      <input className={styles.animal_input}
        name='longitude'
        value={longitude}
        placeholder='longitude'
        onChange={props.handleTextInput}
      />
      <br />
      <button className={styles.animal_button}>{props.type} Animal</button>
    </form>
  )
}
