import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import { AuthProvider } from './context/AuthContext';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';

const App: React.FC = () => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
  return (
    <div>
      <Header />
      <React.StrictMode>
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<ProductDetail />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/receitas" element={<Recipes />} />
        <Route path="/receitas/:id" element={<RecipeDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};


export default App;
