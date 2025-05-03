import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header style={{ padding: '1rem', backgroundColor: '#4CAF50', color: 'white' }}>
      <h1>Delícias Horti</h1>
      <nav style={{ marginTop: '0.5rem' }}>
        <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
        {!user && (
          <>
            <Link to="/login" style={{ color: 'white', marginRight: '1rem' }}>Login</Link>
            <Link to="/cadastro" style={{ color: 'white' }}>Cadastro</Link>
          </>
        )}
        {user && (
          <>
            <span style={{ marginRight: '1rem' }}>Olá, {user}!</span>
            <button onClick={logout} style={{ background: 'white', color: '#4CAF50', border: 'none', cursor: 'pointer' }}>
              Sair
            </button>
          </>
        )}
      </nav>
      <Link to="/receitas" style={{ color: 'white', marginRight: '1rem' }}>Receitas</Link>
    </header>
  );
};

export default Header;
