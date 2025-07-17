import React from 'react';
import './Card.css';

const Card = ({ nombre, precio, descripcion, imagen }) => {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} className="card-img" />
      <h3> Producto:{nombre}</h3>
      <p><strong>Precio:</strong> ${precio}</p>
      <p>{descripcion}</p>
    </div>
  );
};

export default Card;
