import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import AnimalCreate from '../screens/AnimalCreate/AnimalCreate';
import AnimalDetails from '../screens/AnimalDetails/AnimalDetails';
import Animals from '../screens/Animals/Animals';
import { createAnimals, getAllAnimals } from '../services/animalConfig';

export default function AnimalsContainer(props) {

  const [animals, setAnimals] = useState([]);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnimals = async () => {
      const animals = await getAllAnimals()
      setAnimals(animals)
    }
    fetchAnimals()
  })

  const handleCreate = async (AnimalData) => {
    await createAnimals(AnimalData)
    setToggle(prevToggle => !prevToggle)
    navigate('/animals')
  }



  return (
    <div>
      <Routes>
        <Route path='/' element={<Animals animals={animals} currentUser={props.currentUser} />} />
        <Route path='/:id' element={<AnimalDetails animals={animals} currentUser={props.currentUser} />} />
        <Route path='/add' element={<AnimalCreate handleCreate={handleCreate}/>} />
      </Routes>
    </div>
  )
}
