import '../../App.css'
import React from 'react';

const CartItem = ({ id, name, quantity, price }) => {


  return (
    <div className="CartItem">
      <div className="CartItem-info">
        <p className="CartItem-title">Código de producto:</p>
        <p className="CartItem-value">{id}</p>
      </div>
      <div className="CartItem-info">
        <p className="CartItem-title">Nombre de producto:</p>
        <p className="CartItem-value">{name}</p>
      </div>
      <div className="CartItem-info">
        <p className="CartItem-title">Cantidad:</p>
        <p className="CartItem-value">{quantity}</p>
      </div>
      <div className="CartItem-info">
        <p className="CartItem-title">Precio Unitario:</p>
        <p className="CartItem-value">${price}</p>
      </div>
    </div>
  );
};

export default CartItem;