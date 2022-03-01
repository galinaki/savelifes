import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import AnimalForm from '../../components/AnimalForm/AnimalForm';
import { useLocation } from 'react-router';

const default_input = {
  name: '',
  img_url: '',
  population: 0,
  habitats: '',
  link: '',
  location: ''
}

export default function AnimalEdit(props) {
  
  const navigate = useNavigate()
  const { id } = useParams();
  // const location = useLocation()

  const [input, setInput] = useState(props.animals)
  const [currentAnimal, setCurrentAnimal] = useState(props.animals)
  useEffect(() => {
    const foundAnimal = props.animals.find(animal => animal.id === parseInt(id)
    )
    setCurrentAnimal(foundAnimal)
    console.log(currentAnimal)
  }, [])


  
  const handleTextInput = (event) => {
    const { name, value } = event.target.value
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

  const handleSubmit = (e)=> {
    e.preventDefault()
    const AnimalData = input
    console.log(input)
    props.handleEdit(id, AnimalData)
    navigate('/animals')
  }

  return (
    <div>
      <h3>Edit an Animal</h3>
      <AnimalForm
        input={currentAnimal}
        handleTextInput={handleTextInput}
        handleNumberInput={handleNumberInput}
        handleSubmit={handleSubmit}
        type={'Edit'}
      />
    </div>
  )
}
