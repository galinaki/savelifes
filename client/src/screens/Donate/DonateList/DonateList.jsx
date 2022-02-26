import React from 'react';
import { Link } from 'react-router-dom';

export default function DonateList(props) {
  return (
    <div>
      {
        props.donates.map(donate => (
          <div key={donate.id}>
            <img src={donate.logo_url} alt={donate.name} style={{width: "100px"}}/>
            <h4>{donate.name}</h4>
            <h5>{donate.desciption}</h5>
            <h6><a href={`${donate.link}`}>Link here</a></h6>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))
      }
      <Link to='/donate/newFund'><button>Add more Funds</button></Link>
    </div>
  )
}
