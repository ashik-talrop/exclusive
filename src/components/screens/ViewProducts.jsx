import React from 'react'
import styled from 'styled-components';
import data from '../data/data.json';
// import car from '../../assets/images/car.png';
import like from '../../assets/icons/wishlist.svg';
import view from '../../assets/icons/Quick View.svg';
import empty from '../../assets/icons/empty-star.svg';
import star from "../../assets/icons/star.svg";
// import truck from "../../assets/icons/icon-delivery-1.svg"
// import headphones from "../../assets/icons/Icon-Customer service.svg"
// import guarantee from "../../assets/icons/safety.svg"

export default function ViewProducts() {
  return (
    <div  className="wrapper">
            <Section>
                <Home>Home</Home>
                <Home>/</Home>
                <Pro>Products</Pro>
            </Section>
           <Products>
           {data.products.map((product, index) => (
                <ProductCard key={index}>
                    <ProductImageSection>
                        <ProductImgContainer>
                            <ProductImage src={product.photo} alt={product.title} />
                        </ProductImgContainer>
                        {product.new_product && <NewBadge>NEW</NewBadge>}
                        {product.discount_percentage !== null && (
                            <DiscountPercentage>{product.discount_percentage}%</DiscountPercentage>
                            )}
                        <Like src={like} alt="like" position="right-10" />
                        <View src={view} alt="view" position="right-40" />
                        <Add>Add To Cart</Add>
                    </ProductImageSection>
                    <ProductDetails>
                        <ProductTitle>{product.title}</ProductTitle>
                        <ProductCounts>
                            <ProductPrice>${ product.price}</ProductPrice>
                            {product.discount_price !== null && (
                            <DiscountPrice>${ product.discount_price}</DiscountPrice>
                            )}

                            <ProductReview>
                                {Array.from({ length: 5 }, (_, i) => (
                                    <StarIcon key={i} src={i < Math.floor(product.rating) ? star : empty} alt="star" />
                                ))}
                            </ProductReview>
                            <ReviewCount>({product.review_count})</ReviewCount>
                        </ProductCounts>

                        {product.colors && product.colors.length > 0 && (
                            <ColorOptions>
                                {product.colors.map((color, index) => (
                                    <ColorSwatch key={index} color={color} />
                                ))}
                            </ColorOptions>
                        )}
                    </ProductDetails>
                </ProductCard>
            ))}
        </Products>
    </div>
  )
}

const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 50px;
    cursor: pointer;
`;

const ProductImageSection = styled.div`
    position: relative;
`;
const Add = styled.div`
    display: none;
    position: absolute;
    
`

const ProductImgContainer = styled.div`
    width: 270px;
    height: 250px;
    overflow: hidden;
    background-color: #F5F5F5;

    img {
        object-fit: scale-down;
    }
`;

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const NewBadge = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #00FF66;
    color: #fff;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 5px;
    text-transform: uppercase;
`;

const Like = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
    height: auto;
    cursor: pointer;
    background-color: #fff;
    border-radius: 50%;
    padding: 5px;
`;
const View = styled.img`
    position: absolute;
    top: 50px;
    right: 10px;
    width: 25px;
    height: auto;
    cursor: pointer;
    background-color: #fff;
    border-radius: 50%;
    padding: 5px;
`;

const ProductDetails = styled.div`
    padding: 15px;
    text-align: left;
    width: 240px;
    cursor: pointer;
`;

const ProductTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #000000;

`;

const ProductCounts = styled.div`
    display: flex;
    align-items: center;
    
`;

const ProductPrice = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
   color: #DB4444;
    margin-right: 10px;
`;

const ProductReview = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;

    img {
        width: 16px;
        height: 16px;
        margin-right: 3px;
    }
`;

const StarIcon = styled.img`
    width: 16px;
    height: 16px;
`;

const ReviewCount = styled.div`
    font-size: 14px;
    color: #555;
`;

const ColorOptions = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const ColorSwatch = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ color }) => color || '#000'};
    margin-right: 5px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    
    &:first-of-type {
        border: 2px solid #000000;
    }
`;
const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 10px;
    margin-top: 20px;
`;
const DiscountPercentage = styled.span`
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #DB4444;
    color: #fff;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 5px;
    text-transform: uppercase;
`;
const DiscountPrice = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-decoration-line: line-through;
    color: #555;
    margin-right: 10px;
`   

const Section = styled.div`
    display: flex ;
    margin-top: 150px;
    justify-content: space-around;
    width: 160px;
`
const Home = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #808080;
`
const Pro = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #000;
`
    
