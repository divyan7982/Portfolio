import './productList.css';
import Product from '../product/Product';
import { products } from '../../data';
import React from 'react';

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Work</h1>
        <p className="pl-desc">
          Welcome to my portfolio website, where creativity meets innovation.
          Explore a showcase of my diverse projects, ranging from captivating
          designs to cutting-edge developments. 
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
