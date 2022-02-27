import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import AnimalForm from '../../components/AnimalForm/AnimalForm';
import { useLocation } from 'react-router';

export default function AnimalEdit(props) {
  
  const navigate = useNavigate()
  const { id } = useParams();
  const location = useLocation()
//   const fromDashboard = location.state?.fromDashboard

// console.log(fromDashboard)

  const default_input = {
    name: "name" ,
    img_url: "?",
    population: 0,
    habitats: "test",
    link: "test",
    location: "test"
  }

  const [input, setInput] = useState(default_input)
  
  const handleTextInput = (event) => {
    const { name, value } = event.target
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }
  
  const handleNumberInput = (e) => {
    const { name, valueAsNumber } = e.target
    setInput((prevInput) => ({
      ...prevInput,
      [name]: valueAsNumber,
    }))
  }

  const handleSubmit = (e)=> {
    e.preventDefault()
    const AnimalData = input
    props.handleEdit(id, AnimalData)
    navigate('/animals')
  }

  return (
    <div>
      <h3>Edit an Animal</h3>
      <AnimalForm
        input={input}
        handleTextInput={handleTextInput}
        handleNumberInput={handleNumberInput}
        handleSubmit={handleSubmit}
        type={'Edit'}
      />
    </div>
  )
}
