import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../includs/Header";
import styled, { keyframes } from "styled-components";
import bus from "../../assets/icons/icon-delivery.svg";
import returnIcon from "../../assets/icons/Icon-return.svg";
import empty from "../../assets/icons/empty-star.svg";
import star from "../../assets/icons/star.svg";
import like from "../../assets/icons/wishlist.svg";
import view from "../../assets/icons/Quick View.svg";
import Footer from "../includs/Footer";

export default function ProductPage() {
    const { id } = useParams();
    const productId = Number(id);
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                if (response.ok) {
                    const data = await response.json();
                    setProduct(data);
                } else {
                    console.error("Product not found");
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [productId]);

    useEffect(() => {
        const fetchRelatedProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (response.ok) {
                    const data = await response.json();
                    const related = data.filter((product) => product.id !== productId);
                    setRelatedProducts(related.sort(() => Math.random() - 0.5).slice(0, 4));
                }
            } catch (error) {
                console.error("Error fetching related products:", error);
            }
        };

        fetchRelatedProducts();
    }, [productId]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div>
            <Header />
            <div className="wrapper">
                <PageContainer>
                    {product ? (
                        <>
                            <CategoryName>
                                <Home>Home / {product.category} /</Home>
                                <ProductName>{product.title}</ProductName>
                            </CategoryName>
                            <SinglePageListing>
                                <Left>
                                    <ItemImg
                                        src={product.image}
                                        alt={product.title}
                                    />
                                </Left>
                                <Right>
                                    <Title>{product.title}</Title>
                                    <Counts>
                                        <ProductRating>
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <StarIcon
                                                    key={i}
                                                    src={i < Math.floor(product.rating.rate)
                                                        ? star
                                                        : empty}
                                                    alt="star"
                                                />
                                            ))}
                                        </ProductRating>
                                        <ProductReview>
                                            ({product.rating.count} Reviews)
                                        </ProductReview>
                                        <Stock>In Stock</Stock>
                                    </Counts>
                                    <Prize>${product.price}</Prize>
                                    <Description>
                                        {product.description}
                                    </Description>
                                    <Hr />
                                    {product.colors && product.colors.length > 0 && (
                                        <ColorOptions>
                                            Colours:
                                            {product.colors.map((color, index) => (
                                                <ColorSwatch
                                                    key={index}
                                                    color={color}
                                                />
                                            ))}
                                        </ColorOptions>
                                    )}
                                    <PaymentAndWarrenty>
                                        <Payment>
                                            <Card src={bus} alt="bus" />
                                            <Promotion>
                                                <Tilt>Free Delivery</Tilt>
                                                <Clickable>
                                                    Enter your postal code for
                                                    Delivery Availability
                                                </Clickable>
                                            </Promotion>
                                        </Payment>
                                        <HrLine />
                                        <Payment>
                                            <Card
                                                src={returnIcon}
                                                alt="returnIcon"
                                            />
                                            <Promotion>
                                                <Tilt>Return Delivery</Tilt>
                                                <Subtitle>
                                                    Free 30 Days Delivery
                                                    Returns. <Clickable>Details</Clickable>
                                                </Subtitle>
                                            </Promotion>
                                        </Payment>
                                    </PaymentAndWarrenty>
                                </Right>
                            </SinglePageListing>
                        </>
                    ) : (
                        <p>Product not found</p>
                    )}
                </PageContainer>
                {relatedProducts.length > 0 && (
                    <>
                        <CategoryHeader>
                            <Bar />
                            <RelatedItem>Related Item</RelatedItem>
                        </CategoryHeader>
                        <Products>
                            {relatedProducts.map((product, index) => (
                                <ProductCard
                                    onClick={() => {
                                        navigate(`/product/${product.id}`);
                                    }}
                                    key={index}
                                >
                                    <ProductImageSection>
                                        <ProductImgContainer>
                                            <ProductImage
                                                src={product.image}
                                                alt={product.title}
                                            />
                                            <AddCart>Add To Cart</AddCart>
                                        </ProductImgContainer>
                                        {product.new && <NewBadge>NEW</NewBadge>}
                                        <LikeBg>
                                            <Like
                                                src={like}
                                                alt="like"
                                                position="right-10"
                                            />
                                        </LikeBg>
                                        <View
                                            src={view}
                                            alt="view"
                                            position="right-40"
                                        />
                                    </ProductImageSection>
                                    <ProductDetails>
                                        <ProductTitle>{product.title}</ProductTitle>
                                        <ProductCounts>
                                            <ProductPrice>
                                                $
                                                {product.discountPrice || product.price}
                                            </ProductPrice>
                                            <ProductReview>
                                                {Array.from({ length: 5 }, (_, i) => (
                                                    <StarIcon
                                                        key={i}
                                                        src={i < Math.floor(product.rating.rate)
                                                            ? star
                                                            : empty}
                                                        alt="star"
                                                    />
                                                ))}
                                            </ProductReview>
                                            <ReviewCount>
                                                ({product.rating.count})
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
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
}


const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Arial, sans-serif;
    margin-top: 130px;
    margin-bottom: 50px;

    @media (max-width: 480px) {
        margin-top: 30px;
        margin-bottom: 60px;
    }
`;

const CategoryName = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
    font-size: 14px;
    color: #555;
    margin-bottom: 50px;
`;

const Home = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #808080;
    word-spacing: 12px;

    @media (max-width: 360px) {
        font-size: 13px;
        word-spacing: 4px;
    }
`;

const ProductName = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #000;
    margin-left: 12px;
    @media (max-width: 360px) {
        font-size: 13px;
        margin-left: 4px;
    }
`;
const SinglePageListing = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1280px) {
        align-items: center;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    background-color: #ffffff;
    width: 700px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1400px) {
        width: 600px;
        height: 600px;
    }
    @media (max-width: 1280px) {
        width: 55%;
        height: 55%;
    }
    @media (max-width: 768px) {
        width: 90%;
        height: 90%;
        margin-bottom: 20px;
    }
`;
const ItemImg = styled.img`
    object-fit: fill;
    width: 70%;
    height: 70%;
`;

const Right = styled.div`
    margin-top: 60px;
    width: 50%;
    @media (max-width: 1280px) {
        margin-top: 0px;
    }
    @media (max-width: 1080px) {
        width: 42%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.03em;
`;

const Counts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    width: 280px;
`;

const ProductRating = styled.div`
    display: flex;
    gap: 5px;
`;

const StarIcon = styled.img`
    width: 20px;
    height: 20px;
`;

const ProductReview = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #808080;
`;

const Stock = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #00ff66;
`;

const Prize = styled.span`
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.03em;

    margin-bottom: 15px;
`;

const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    width: 100%;
    // height: 63px;
    // overflow-y: auto;
    // overflow-x: hidden;
    // white-space: normal;
    @media (max-width: 1080px) {
        width: 100%;
    }
`;

const Hr = styled.hr`
    border: 0;
    border-top: 1px solid #000000;
    margin-bottom: 15px;
    margin-top: 30px;
`;

const ColorOptions = styled.div`
    display: flex;
    gap: 10px;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.03em;
    margin-bottom: 30px;
`;

const ColorSwatch = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    border: 1px solid #ccc;
    cursor: pointer;
`;

const PaymentAndWarrenty = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #808080;
    border-radius: 4px;
    height: 180px;
    justify-content: space-between;
`;

const Payment = styled.div`
    display: flex;
    align-items: center;
    height: 90px;
`;

const Card = styled.img`
    width: 50px;
    height: 50px;
    padding: 10px 20px;
`;

const Promotion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Clickable = styled.a`
    font-size: 12px;
    color: #000000;
    text-decoration: underline;
    cursor: pointer;
`;
const Subtitle = styled.a`
    font-size: 12px;
    color: #000000;
`;

const Tilt = styled.h3`
    font-size: 14px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
`;
const HrLine = styled.div`
    border: 0.5px solid #808080;
`;

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

const RelatedItem = styled.h2`
    font-size: 16px;
    font-weight: 600;
    color: #db4444;
`;
const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, fr);
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
const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 50px;
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const ProductImageSection = styled.div`
    position: relative;
`;


const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AddCart = styled.div`
  background-color: #000;
  position: absolute;
  color: #fff;
  bottom: 0px;
  width: 98.5%;
  text-align: center;
  height: 40px;
  display: none; 
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  font-size: 16px;

  &.animate {
    display: flex;
    animation: ${slideUp} 0.3s ease-in-out;
  }
`;

const ProductImgContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  background-color: #ffffff;
  position: relative;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: scale-down;
    width: 70%;
    height: 70%;

  }

  @media (max-width: 1280px) {
    width: 100%;
  }

  &:hover ${AddCart} {
    display: flex; 
    animation: ${slideUp} 0.3s ease-in-out; 
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
    width: 92%;
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

const ReviewCount = styled.div`
    font-size: 14px;
    color: #555;
`;
