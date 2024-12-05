import React , { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../includs/Header";
import styled from "styled-components";
import data from "../data/data.json";
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

    const product = data.products.find((product) => product.id === productId);
    const navigate = useNavigate();

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
                                        src={product.photo}
                                        alt={product.title}
                                    />
                                </Left>
                                <Right>
                                    <Title>{product.title}</Title>
                                    <Counts>
                                        <ProductRating>
                                            {Array.from(
                                                { length: 5 },
                                                (_, i) => (
                                                    <StarIcon
                                                        key={i}
                                                        src={
                                                            i <
                                                            Math.floor(
                                                                product.rating
                                                            )
                                                                ? star
                                                                : empty
                                                        }
                                                        alt="star"
                                                    />
                                                )
                                            )}
                                        </ProductRating>
                                        <ProductReview>
                                            ({product.review_count} Reviews)
                                        </ProductReview>
                                        <Stock>In Stock</Stock>
                                    </Counts>
                                    <Prize>${product.price}</Prize>
                                    <Description>
                                        {product.description}
                                    </Description>
                                    <Hr />
                                    {product.colors &&
                                        product.colors.length > 0 && (
                                            <ColorOptions>
                                                Colours:
                                                {product.colors.map(
                                                    (color, index) => (
                                                        <ColorSwatch
                                                            key={index}
                                                            color={color}
                                                        />
                                                    )
                                                )}
                                            </ColorOptions>
                                        )}
                                    <PaymentAndWarrenty>
                                        <Payment>
                                            <Card src={bus} alt="bus" />
                                            <Promotion>
                                                <Tilt>Free Delivery</Tilt>
                                                <Subtitle>
                                                    Enter your postal code for
                                                    Delivery Availability
                                                </Subtitle>
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
                                                    Returns. Details
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
                <CategoryHeader>
                    <Bar />
                    <RelatedItem>Related Item</RelatedItem>
                </CategoryHeader>
                <Products>
                    {data.products
                        .sort(() => Math.random() - 0.5)
                        .slice(0, 4)
                        .map((product, index) => (
                            <ProductCard
                                onClick={() => {
                                    navigate(`/product/${product.id}`);
                                }}
                                key={index}
                            >
                                <ProductImageSection>
                                    <ProductImgContainer>
                                        <ProductImage
                                            src={product.photo}
                                            alt={product.title}
                                        />
                                    </ProductImgContainer>
                                    {product.new_product && (
                                        <NewBadge>NEW</NewBadge>
                                    )}
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
                                    <Add>Add To Cart</Add>
                                </ProductImageSection>
                                <ProductDetails>
                                    <ProductTitle>{product.title}</ProductTitle>
                                    <ProductCounts>
                                        <ProductPrice>
                                            $
                                            {product.discount_price ||
                                                product.price}
                                        </ProductPrice>
                                        <ProductReview>
                                            {Array.from(
                                                { length: 5 },
                                                (_, i) => (
                                                    <StarIcon
                                                        key={i}
                                                        src={
                                                            i <
                                                            Math.floor(
                                                                product.rating
                                                            )
                                                                ? star
                                                                : empty
                                                        }
                                                        alt="star"
                                                    />
                                                )
                                            )}
                                        </ProductReview>
                                        <ReviewCount>
                                            ({product.review_count})
                                        </ReviewCount>
                                    </ProductCounts>
                                    {product.colors &&
                                        product.colors.length > 0 && (
                                            <ColorOptions>
                                                {product.colors.map(
                                                    (color, index) => (
                                                        <ColorSwatch
                                                            key={index}
                                                            color={color}
                                                        />
                                                    )
                                                )}
                                            </ColorOptions>
                                        )}
                                </ProductDetails>
                            </ProductCard>
                        ))}
                </Products>
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
    margin-bottom: 130px;
    @media (max-width: 480px) {
        margin-top: 60px;
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

    &:hover {
        color: #000;
        text-decoration: underline;
    }
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
    background-color: #f5f5f5;
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
        height: auto;
        margin-bottom: 20px;
    }
`;
const ItemImg = styled.img`
    object-fit: fill;
    width: 80%;
    height: 80%;
`;

const Right = styled.div`
    margin-top: 60px;
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
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
`;

const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    width: 373px;
    height: 63px;
    overflow-y: auto;
    overflow-x: hidden;
    white-space: normal;
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

const Subtitle = styled.span`
    font-size: 12px;
    color: #555;
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
`;
const ProductImageSection = styled.div`
    position: relative;
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
    color: #db4444;
    margin-right: 10px;
`;
const Add = styled.div`
    display: none;
    position: absolute;
`;
const ReviewCount = styled.div`
    font-size: 14px;
    color: #555;
`;
