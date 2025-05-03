import React from 'react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { products } from '../data/products';

const Carrinho: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const getProductInfo = (name: string) => {
    return products.find(p => p.name.toLowerCase() === name.toLowerCase());
  };
  const [code, setCode] = useState('');
  const { cart, removeFromCart, clearCart, coupon, applyCoupon } = useCart();
  const subtotal = cart.reduce((acc, item) => {
    const product = getProductInfo(item.name);
    return product ? acc + product.price * item.quantity : acc;
  }, 0);
  
  const discount = coupon ? subtotal * (coupon.discount / 100) : 0;
  const total = subtotal - discount;
  

  return (
    <main style={{ padding: '1rem' }}>
      <h2>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.name}>
              {item.name} — Quantidade: {item.quantity}{' '}
              <button onClick={() => removeFromCart(item.name)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button onClick={clearCart} style={{ marginTop: '1rem' }}>Limpar carrinho</button>
      )}
    </main>
    {
    cart.map(item => {
      const product = getProductInfo(item.name);

      if (!product) {
        return (
          <li key={item.name}>
            ❌ <strong>{item.name}</strong> — Produto não encontrado no catálogo.
            <button onClick={() => removeFromCart(item.name)}>Remover</button>
          </li>
        );
      }

      const subtotal = product.price * item.quantity;

      return (
        <li key={item.name} style={{ marginBottom: '1rem' }}>
          <img src={product.image} alt={product.name} style={{ width: '60px', verticalAlign: 'middle', marginRight: '1rem' }} />
          <strong>{product.name}</strong> — R$ {product.price.toFixed(2)} x {item.quantity} = <strong>R$ {subtotal.toFixed(2)}</strong>
          <button onClick={() => removeFromCart(item.name)} style={{ marginLeft: '1rem' }}>Remover</button>
        </li>
      );
      const total = cart.reduce((acc, item) => {
        const product = getProductInfo(item.name);
        return product ? acc + product.price * item.quantity : acc;
      }, 0);

      <p><strong>Total: R$ {total.toFixed(2)}</strong></p>
    })
  }      
  );
};
<div style={{ marginTop: '1rem' }}>
  <input
    value={code}
    onChange={e => setCode(e.target.value)}
    placeholder="Digite o cupom"
    style={{ marginRight: '0.5rem' }}
  />
  <button onClick={() => {
    const ok = applyCoupon(code);
    if (!ok) alert('Cupom inválido');
  }}>
    Aplicar Cupom
  </button>
</div>
<p>Subtotal: R$ {subtotal.toFixed(2)}</p>
{coupon && <p>Desconto ({coupon.code}): - R$ {discount.toFixed(2)}</p>}
<p><strong>Total: R$ {total.toFixed(2)}</strong></p>
<p>Obrigado por comprar conosco!</p>
export default Carrinho;
