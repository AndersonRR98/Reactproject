const Card = ({ id, nombre, precio, descripcion, imagen, addToCart }) => {
  return (
   <div className="card">
  {/* Imagen del producto */}
  <img src={imagen} alt={nombre} className="card-img" />
  
  {/* Nombre destacado */}
  <h3>Producto: {nombre}</h3>
  
  {/* Precio */}
  <p><strong>Precio:</strong> ${precio}</p>
  
  {/* Descripción */}
  <p>{descripcion}</p>
  
  {/* Botón de acción */}
  <button 
    onClick={() => addToCart({ id, nombre, precio, imagen })}
    className="add-to-cart-button"
  >
    Añadir al Carrito
  </button>
</div>
  );
};

export default Card;