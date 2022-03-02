import React from 'react'
import { useState } from 'react'

export default function AnimalForm(props) {

  const {name, img_url,  population, habitats, link, location, latitude,
  longitude
  } = props.input

  return (
    <form onSubmit={props.handleSubmit}> 
      <input
        name='name'
        value={name}
        placeholder='name'
        onChange={props.handleTextInput}
      />
      <input
        name='img_url'
        value={img_url}
        placeholder='image link'
        onChange={props.handleTextInput}
      />
      <input
        name='population'
        value={population}
        placeholder='population'
        onChange={props.handleNumberInput}
      />
      <input
        name='habitats'
        value={habitats}
        placeholder='habitats'
        onChange={props.handleTextInput}
      />
      <input
        name='link'
        value={link}
        placeholder='link to source'
        onChange={props.handleTextInput}
      />
      <input
        name='location'
        value={location}
        placeholder='map location'
        onChange={props.handleTextInput}
      />
      <input
        name='latitude'
        value={latitude}
        placeholder='latitude'
        onChange={props.handleTextInput}
      />
      <input
        name='longitude'
        value={longitude}
        placeholder='longitude'
        onChange={props.handleTextInput}
      />
      <button>{props.type} Animal</button>
    </form>
  )
}
