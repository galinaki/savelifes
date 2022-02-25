import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      {
        props.currentUser ? 
          <>
            <h3>Welcome, {props.currentUser.firstname}</h3>
            <button onClick={props.logout}>Log out</button>
          </>
          :
          <>
            <Link to='/login'>Login</Link>
            <Link to='/subscribe'>Subscribe</Link>
          </>
        }
    </div>
  )
}
