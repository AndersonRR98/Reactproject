import ProductList from '../components/ProductList';

// Definimos el componente Products que recibe la función addToCart como prop
const Products = ({ addToCart }) => {
  return (
    // Contenedor principal 
    <div style={{ padding: '20px' }}>
      {/*
        Renderizamos el ProductList y le pasamos la función addToCart
        para que cada producto pueda ser añadido al carrito
      */}
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default Products;