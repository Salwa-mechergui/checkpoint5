import React from 'react';
import '../main.css';


export default function FullName(props) {
  return (
    <div className="name">
        {props.composant2.map(el => (
      <p>{el.FullName}</p>
        ))}
  </div>
  )
}

