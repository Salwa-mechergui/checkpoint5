import React from 'react';
import '../main.css';

export default function Address(props) {
  return (
    <div className="adresse">
    {props.composant3.map(el => (
     <p>{el.Address}</p>
    ))}
    </div>
  )
}


