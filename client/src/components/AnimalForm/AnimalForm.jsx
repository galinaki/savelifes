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
        type='text'
        placeholder='name'
        onChange={props.handleTextInput}
        handleOnChange={props.handleOnChange}
      />
      <input className={styles.animal_input}
        name='img_url'
        value={img_url}
        type='text'
        placeholder='image link'
        onChange={props.handleTextInput}
       
      />
      <input className={styles.animal_input}
        name='population'
        value={population}
        type='number'
        placeholder='population'
        onChange={props.handleNumberInput}
        
      />
      <input className={styles.animal_input}
        name='habitats'
        value={habitats}
        type='text'
        placeholder='habitats'
        onChange={props.handleTextInput}
        
      />
      <input className={styles.animal_input}
        name='link'
        value={link}
        type='text'
        placeholder='link to source'
        onChange={props.handleTextInput}
       
      />
      <input className={styles.animal_input}
        name='latitude'
        value={latitude}
        type='text'
        placeholder='latitude'
        onChange={props.handleTextInput}
        
      />
      <input className={styles.animal_input}
        name='longitude'
        value={longitude}
        type='text'
        placeholder='longitude'
        onChange={props.handleTextInput}
        
      />
      <br />
      <button className={styles.animal_button}>{props.type} Animal</button>
    </form>
  )
}
