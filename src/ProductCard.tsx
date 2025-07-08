import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description }) => (
  <div className="product-card">
    <div className="product-card-title">{title}</div>
    <div className="product-card-desc">{description}</div>
  </div>
);

export default ProductCard; 