import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

export default function AnimalDetails(props) {

  const [animal, setAnimal] = useState({});
  // const [toggle, setToggle] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    const foundAnimal = props.animals.find(animal => {
      return animal.id === parseInt(id)
    })
    setAnimal(foundAnimal)
  }, [id, props.animals])

  return (
    <div>
      {
        animal.id ? 
          <>
            <img src={animal.img_url} alt={animal.name} />
            <h3>{animal.name}</h3>
            <h4>{animal.population}</h4>
            <h4>{animal.habitats}</h4>
            <h5>{animal.link}</h5>
            <h5>{animal.location}</h5>
          </>
          :
          <h6>Nothing found</h6>
      }
    </div>
  )
}
