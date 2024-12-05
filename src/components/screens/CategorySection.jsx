import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import data from "../data/data.json";
import like from "../../assets/icons/wishlist.svg";
import view from "../../assets/icons/Quick View.svg";
import empty from "../../assets/icons/empty-star.svg";
import star from "../../assets/icons/star.svg";
import truck from "../../assets/icons/icon-delivery-1.svg";
import headphones from "../../assets/icons/Icon-Customer service.svg";
import guarantee from "../../assets/icons/safety.svg";

function CategorySection() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleClick = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    };

    const filteredProducts = selectedCategory
        ? data.products.filter(
              (product) => product.category === selectedCategory
          )
        : data.products;

    return (
        <div className="wrapper">
            <CategoryHeader>
                <Bar />
                <Subtitle>Categories</Subtitle>
            </CategoryHeader>
            <SectionTitle>Browse By Category</SectionTitle>
            <CategoryList>
                {data.categories.map((category, index) => (
                    <CategoryCard
                        key={index}
                        onClick={() => setSelectedCategory(category.name)}
                    >
                        <CategoryIcon
                            src={category.image}
                            alt={category.name}
                        />
                        <CategoryName>{category.name}</CategoryName>
                    </CategoryCard>
                ))}
            </CategoryList>
            <Products>
                {filteredProducts.slice(0, 8).map((product, index) => (
                    <ProductCard
                        key={index}
                        onClick={() => handleClick(`/product/${product.id}`)}
                    >
                        <ProductImageSection>
                            <ProductImgContainer>
                                <ProductImage
                                    src={product.photo}
                                    alt={product.title}
                                />
                            </ProductImgContainer>
                            {product.new_product && <NewBadge>NEW</NewBadge>}
                            <LikeBg>
                                <Like
                                    src={like}
                                    alt="like"
                                    position="right-10"
                                />
                            </LikeBg>
                            <View src={view} alt="view" position="right-40" />
                            <Add>Add To Cart</Add>
                        </ProductImageSection>
                        <ProductDetails>
                            <ProductTitle>{product.title}</ProductTitle>
                            <ProductCounts>
                                <ProductPrice>
                                    ${product.discount_price || product.price}
                                </ProductPrice>
                                <ProductReview>
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <StarIcon
                                            key={i}
                                            src={
                                                i < Math.floor(product.rating)
                                                    ? star
                                                    : empty
                                            }
                                            alt="star"
                                        />
                                    ))}
                                </ProductReview>
                                <ReviewCount>
                                    ({product.review_count})
                                </ReviewCount>
                            </ProductCounts>
                            {product.colors && product.colors.length > 0 && (
                                <ColorOptions>
                                    {product.colors.map((color, index) => (
                                        <ColorSwatch
                                            key={index}
                                            color={color}
                                        />
                                    ))}
                                </ColorOptions>
                            )}
                        </ProductDetails>
                    </ProductCard>
                ))}
            </Products>

            <StyledHr />

            <AllProducts>
                <ButtonSection>
                    <MainButton onClick={() => handleClick("/view-all")}>
                        View All Products
                    </MainButton>
                </ButtonSection>
                <InfoBanners>
                    <Info>
                        <GrayImg>
                            <BlackBox>
                                <Logo src={truck} alt="truck" />
                            </BlackBox>
                        </GrayImg>
                        <InfoTitle>FREE AND FAST DELIVERY</InfoTitle>
                        <InfoSubtitle>
                            Free delivery for all orders over $140
                        </InfoSubtitle>
                    </Info>
                    <Info>
                        <GrayImg>
                            <BlackBox>
                                <Logo src={headphones} alt="Customer service" />
                            </BlackBox>
                        </GrayImg>
                        <InfoTitle>24/7 CUSTOMER SERVICE</InfoTitle>
                        <InfoSubtitle>
                            Friendly 24/7 customer support
                        </InfoSubtitle>
                    </Info>
                    <Info>
                        <GrayImg>
                            <BlackBox>
                                <Logo src={guarantee} alt="guarantee" />
                            </BlackBox>
                        </GrayImg>
                        <InfoTitle>MONEY BACK GUARANTEE</InfoTitle>
                        <InfoSubtitle>
                            We return money within 30 days
                        </InfoSubtitle>
                    </Info>
                </InfoBanners>
            </AllProducts>
        </div>
    );
}

export default CategorySection;

const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Bar = styled.div`
    width: 20px;
    height: 40px;
    background-color: #db4444;
    margin-right: 10px;
    border-radius: 4px;
`;

const Subtitle = styled.h2`
    font-size: 16px;
    font-weight: 600;
    color: #db4444;
`;

const SectionTitle = styled.h3`
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #000;
`;

const CategoryList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-bottom: 50px;
    @media (max-width: 1280px) {
        grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    }
    @media (max-width: 1080px) {
        grid-template-columns: repeat(auto-fit, minmax(191px, 1fr));
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(171px, 1fr));
    }
    @media (max-width: 640px) {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }
    @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
`;

const CategoryCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 4px;
    height: 145px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    }
`;

const CategoryIcon = styled.img`
    width: 56px;
    height: auto;
    margin-bottom: 10px;
    @media (max-width: 480px) {
        width: 40px;
    }
`;

const CategoryName = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

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
`;

const ProductImgContainer = styled.div`
    width: 270px;
    height: 250px;
    overflow: hidden;
    background-color: #f5f5f5;

    img {
        object-fit: scale-down;
    }
    @media (max-width: 1280px) {
        width: 100%;
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
    background-color: #00ff66;
    color: #fff;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 5px;
    text-transform: uppercase;
`;

const Like = styled.img`
    cursor: pointer;
    margin-top: 3px;
`;
const LikeBg = styled.div`
    background-color: #fff;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 5px;
    text-align: center;
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
    @media (max-width: 1280px) {
        width: 100%;
    }
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
    color: #db4444;
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
    background-color: ${({ color }) => color || "#000"};
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

    @media (max-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const StyledHr = styled.hr`
    border: none;
    border-top: 1px solid #a6aebf;
    margin: 20px 0;
    width: 100%;
`;

const AllProducts = styled.div`
    margin-bottom: 100px;
`;
const ButtonSection = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    @media (max-width: 1280px) {
        margin-top: 40px;
    }
`;
const MainButton = styled.button`
    background-color: #db4444;
    color: #fafafa;
    border: none;
    font-weight: 500;
    font-size: 16px;
    padding: 14px 30px;
    border-radius: 4px;
    cursor: pointer;
`;

const InfoBanners = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    width: 300px;

    @media (max-width: 1400px) {
        width: 28%;
    }
    @media (max-width: 1280px) {
        width: 27%;
    }
    @media (max-width: 1080px) {
        width: 26%;
    }
    @media (max-width: 980px) {
        width: 25%;
    }
    @media (max-width: 768px) {
        width: 23%;
    }

    @media (max-width: 640px) {
        width: 100%;
    }
`;

const GrayImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background-color: #eee;
    border-radius: 50%;
    margin-bottom: 15px;
`;

const BlackBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: black;
    border-radius: 50%;
`;

const Logo = styled.img`
    width: 40px;
    height: auto;
`;

const InfoTitle = styled.h3`
    margin: 10px 0;
    color: #000000;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
`;

const InfoSubtitle = styled.p`
    margin: 5px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #000000;
`;
