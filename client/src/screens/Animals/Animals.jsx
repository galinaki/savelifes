import React from 'react';
import { Link } from 'react-router-dom';

export default function Animals(props) {
  return (
    <div>
      {props.animals.map(animal => (
        <Link key={animal.id} to={`/animals/${animal.id}`} >
          <img src={animal.ing_url} alt={animal.name}/>
          <h4>{animal.name}</h4>
        </Link>
      ))}
    </div>
  )
}
