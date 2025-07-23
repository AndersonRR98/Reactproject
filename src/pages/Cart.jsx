// Este es el componente del carrito de compras que muestra todos los productos añadidos
const Cart = ({ cartItems, removeFromCart }) => {
  // Primero calculamos el total sumando los precios de todos los productos
  // Usamos reduce para ir acumulando la suma, empezando desde 0
  const total = cartItems.reduce((sum, item) => sum + item.precio, 0);

  return (
    <div style={{ padding: '20px' }}> {/* Espaciado general para que no se vea pegado a los bordes */}
      <h2>Carrito de Compras</h2> {/* Título principal del carrito */}
      
      {cartItems.length === 0 ? ( // Verificamos si el carrito está vacío
        <p>Tu carrito está vacío</p> // Mensaje amigable cuando no hay productos
      ) : (
        <div>
          {/* Si hay productos, los mostramos uno por uno */}
          {cartItems.map(item => (
            // Cada producto tiene su propio contenedor con estilos
            <div 
              key={item.id} // Importante: clave única para optimizar el renderizado
              style={{ 
                border: '1px solid #ddd',  // Borde sutil
                padding: '10px',          // Espacio interno
                margin: '10px 0',         // Margen entre productos
                display: 'flex',          // Usamos flex para alinear
                justifyContent: 'space-between' // Separa nombre y botón
              }}
            >
              {/* Información del producto */}
              <div>
                <h3>{item.nombre}</h3>         {/* Nombre destacado */}
                <p>Precio: ${item.precio}</p>  {/* Precio formateado */}
              </div>
              
              {/* Botón para eliminar el producto del carrito */}
              <button 
                onClick={() => removeFromCart(item.id)} // Al hacer click elimina el producto
                style={{
                  background: '#0c1aa0ff',  // Color azul corporativo
                  color: 'white',            // Texto blanco para mejor contraste
                  border: 'none',           // Sin bordes
                  padding: '5px 10px',      // Tamaño adecuado
                  cursor: 'pointer'         // Cambia el cursor para indicar que es clickeable
                }}
              >
                Eliminar {/* Texto claro de la acción */}
              </button>
            </div>
          ))}
          
          {/* Mostramos el total de la compra al final */}
          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart; // Exportamos el componente para usarlo en otras partes