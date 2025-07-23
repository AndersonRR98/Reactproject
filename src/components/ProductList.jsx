import React, { useEffect, useState } from 'react';
import Card from './Card';
import './ProductList.css';

const ProductList = ({ addToCart }) => {  // Recibe addToCart como prop
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
// Obtiene los datos 

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        setProductos(data.users);  // Guarda los usuarios como producto
      });
  }, []);

  const filtrados = productos.filter((p) =>
    `${p.firstName} ${p.lastName}`.toLowerCase().includes(busqueda.toLowerCase())
  );

  // input de texto para buscar 

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
  {/* Resultados de la busqueda*/}

      {filtrados.length === 0 ? (
        <p>No se encontraron productos...</p>
      ) : (
        <div className="product-container">
          {filtrados.map((p) => (
            <Card
              key={p.id}
              id={p.id} 
              nombre={`${p.firstName} ${p.lastName}`}
              precio={p.age}  // se usa la edad como precio 
              descripcion={p.email} // el email como descripcion 
              imagen={p.image}
              addToCart={addToCart}  // Pasa addToCart al componente Card
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;