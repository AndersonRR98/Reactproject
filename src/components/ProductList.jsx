import React, { useEffect, useState } from 'react';
import Card from './Card';
import './ProductList.css';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        setProductos(data.users); // Correcto: usuarios como productos
      });
  }, []);

  const filtrados = productos.filter((p) =>
    `${p.firstName} ${p.lastName}`.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="product-list">
      <h2>Tienda de Usuarios</h2>

      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="busqueda-input"
      />

      {filtrados.length === 0 ? (
        <p>No se encontraron productos...</p>
      ) : (
        <div className="product-container">
          {filtrados.map((p) => (
            <Card
              key={p.id}
              nombre={`${p.firstName} ${p.lastName}`}
              precio={p.age}
              descripcion={p.email}
              imagen={p.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
