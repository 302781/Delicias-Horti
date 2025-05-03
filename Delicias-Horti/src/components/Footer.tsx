import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      padding: '1rem',
      backgroundColor: '#f1f1f1',
      textAlign: 'center',
      position: 'relative',
      bottom: 0,
      width: '100%',
      marginTop: '2rem'
    }}>
      <p>&copy; 2025 <strong>Delícias Horti</strong>. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;


