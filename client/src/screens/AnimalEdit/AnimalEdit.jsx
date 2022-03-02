import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import AnimalForm from '../../components/AnimalForm/AnimalForm';
import styles from '../AnimalCreate/AnimalForm.module.css'

const default_input = {
  name: '',
  img_url: '',
  population: 0,
  habitats: '',
  link: '',
  location: '',
  latitude: 0,
  longitude: 0
}

export default function AnimalEdit(props) {
  const { id } = useParams();

  const foundAnimal = props.animals.find(animal => animal.id === parseInt(id)
  )
  
  const navigate = useNavigate()
  

  const [input, setInput] = useState(foundAnimal)
  const [currentAnimal, setCurrentAnimal] = useState(foundAnimal)

  useEffect(() => {
  
    setCurrentAnimal(foundAnimal)
    console.log(currentAnimal)
  }, [])
  
  const handleTextInput = (e) => {
    const { name, value } = e.target.value
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }
  
  const handleNumberInput = (e) => {
    const { name, valueAsNumber } = e.target.value
    setInput((prevInput) => ({
      ...prevInput,
      [name]: valueAsNumber,
    }))
  }

  const handleOnChange = (e)=> {
    e.preventDefault()
    const AnimalData = input
    console.log(input)
    props.handleEdit(id, AnimalData)
    navigate('/animals')
  }

  return (
    <div className={styles.animal_form}>
      <h3>Edit an Animal</h3>
      <AnimalForm
        input={currentAnimal}
        handleTextInput={handleTextInput}
        handleNumberInput={handleNumberInput}
        handleOnChange={handleOnChange}
        type={'Edit'}
      />
    </div>
  )
}
