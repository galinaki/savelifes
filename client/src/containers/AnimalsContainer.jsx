import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import AnimalCreate from '../screens/AnimalCreate/AnimalCreate';
import AnimalDetails from '../screens/AnimalDetails/AnimalDetails';
import AnimalEdit from '../screens/AnimalEdit/AnimalEdit';
import Animals from '../screens/Animals/Animals';
import { createAnimals, deleteAnimals, getAllAnimals, updateAnimals } from '../services/animalConfig';

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
  }, [toggle])

  const handleCreate = async (AnimalData) => {
    await createAnimals(AnimalData)
    setToggle(prevToggle => !prevToggle)
    navigate('/animals')
  }

  const handleEdit = async (id, AnimalData) => {
    await updateAnimals(id, AnimalData)
    setToggle(prevToggle => !prevToggle)
    navigate(`/animals/${id}`)
  }

  const handleDelete = async (id) => {
    await deleteAnimals(id)
    setToggle(prevToggle => !prevToggle)
    navigate('/animals')
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Animals animals={animals} currentUser={props.currentUser} />} />
        <Route path='/:id' element={<AnimalDetails animals={animals} handleDelete={handleDelete}currentUser={props.currentUser} />} />
        <Route path='/add' element={<AnimalCreate handleCreate={handleCreate} />} />
        <Route path='/:id/edit' element={<AnimalEdit handleEdit={handleEdit}  />} />
      </Routes>
    </div>
  )
}
