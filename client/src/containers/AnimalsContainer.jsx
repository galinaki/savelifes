import React, { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AnimalDetails from '../screens/AnimalDetails/AnimalDetails';
import Animals from '../screens/Animals/Animals';
import { getAllAnimals } from '../services/animalConfig';

export default function AnimalsContainer(props) {

  const [animals, setAnimals] = useState([]);
  // const [toggle, setToggle] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchAnimals = async () => {
      const animals = await getAllAnimals()
      setAnimals(animals)
    }
    fetchAnimals()
  })



  return (
    <div>
      <Routes>
        <Route path='/' element={<Animals animals={animals} currentUser={props.currentUser} />} />
        <Route path='/:id' element={<AnimalDetails animals={animals} currentUser={props.currentUser} />} />
      </Routes>
    </div>
  )
}
