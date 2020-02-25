import React from 'react';
import '../main.css';

export default function ProfilePhoto(props) {
  return (
    <div>

   {props.composant1.map(el => (
      <img className="image" src={el.Image}/>
      ))} 
   </div>
  );
}
