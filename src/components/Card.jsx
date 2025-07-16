import React from 'react';
import './Card.css';

const Card = ({ nombre, precio , descripcion }) => {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <p>{descripcion}</p>
    </div>
  );
};

export default Card;
