import React, { useEffect, useState } from 'react';
import Card from './Card';
import './ProductList.css';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda , setBusqueda] =useState("")

  useEffect(() => {
  fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data =>{ 
        console.log(data.users);
        setUsers(data.users)
      })
  }, [count])
    
  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      {productos.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-container">
          {productos.map((p) => (
            <Card key={p.id} nombre={p.nombre} precio={p.precio} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
