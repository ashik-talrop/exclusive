import React from "react";
import styled from "styled-components";

// Sample Product Data
const products = [
  { id: 1, name: "Product 1", price: 100, colors: ["red", "blue", "green"] },
  { id: 2, name: "Product 2", price: 150, colors: [] },
  { id: 3, name: "Product 3", price: 200 }
];

// Styled Components
const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProductName = styled.h3`
  font-size: 18px;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #666;
`;

const ColorOptionsContainer = styled.div`
  margin-top: 10px;
`;

const ColorButton = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  padding: 10px;
  margin: 5px;
  border-radius: 50%;
  cursor: pointer;
  width: 30px;
  height: 30px;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
`;

const NoColorsText = styled.p`
  color: #999;
  font-style: italic;
`;

// Component
const ProductList = () => {
  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>Price: ${product.price}</ProductPrice>
          {product.colors && product.colors.length > 0 ? (
            <ColorOptionsContainer>
              <p>Select a color:</p>
              {product.colors.map((color, index) => (
                <ColorButton key={index} color={color} />
              ))}
            </ColorOptionsContainer>
          ) : (
            <NoColorsText>No color options available</NoColorsText>
          )}
        </ProductCard>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
