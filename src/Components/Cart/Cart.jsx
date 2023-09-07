import React, { useEffect } from "react";

const Cart = () => {
  const [products, setProducts] = React.useState([]);

  const addCart = (item) => {
    setProducts([...products, item]);
  };

  useEffect(() => {}, []);
  return (
    <section className="cart">
      <div>
        {products.length > 0
          ? products.map((products) => products)
          : "Корзина пуста"}
      </div>
    </section>
  );
};

export default Cart;
