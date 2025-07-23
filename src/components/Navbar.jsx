import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav style={{  // estilos de la barra de navegacion 
      background: '#333', 
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <Link 
          to="/" 
          style={{ 
            marginRight: '20px', 
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.2rem'
          }}
        >
          Inicio
        </Link>
        <Link // estilos del inicio  
          to="/productos" 
          style={{ 
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.2rem'
          }}
        >
          Productos
        </Link>
      </div>
      
      <Link 
        to="/carrito" 
        style={{ 
          color: 'white',
          textDecoration: 'none',
          position: 'relative',
          paddingRight: '25px'
        }}
      >
        
        Carrito 
        {cartCount > 0 && ( // solo muestra si hay preoductos agregados 
          <span style={{ // estilos del carrito con los productos 
            position: 'absolute',
            top: '-8px',
            right: '0',
            background: '#ff4757',
            color: 'white',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.8rem'
          }}>
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;