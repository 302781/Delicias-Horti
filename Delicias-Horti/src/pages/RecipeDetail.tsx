import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { recipes } from '../data/recipes';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) return <p>Receita não encontrada.</p>;

  return (
    <main style={{ padding: '1rem' }}>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} style={{ width: '300px' }} />
      <h3>Ingredientes:</h3>
      <ul>
        {recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <h3>Modo de preparo:</h3>
      <p>{recipe.instructions}</p>
      <br />
      <Link to="/receitas">← Voltar às receitas</Link>
    </main>
  );
};

export default RecipeDetail;
