import React from 'react';
import styled from "styled-components";

import AppleIcon from "../../assets/icons/apple.svg";
import ArrowIcon from "../../assets/icons/arrow.svg";
import IphoneImage from "../../assets/images/iphone.png";

export default function Spotlight() {
    return (
        <SpotlightWrapper>
            <Card>
                <Left>
                    <Series>
                        <Apple src={AppleIcon} alt="Apple" />
                        <SeriesTitle>iPhone 14 Series</SeriesTitle>
                    </Series>
                    <Voucher>
                        Up to 10% off Voucher
                    </Voucher>
                    <Bottom>
                        <Button>Shop Now</Button>
                        <Arrow src={ArrowIcon} alt="Arrow" />
                    </Bottom>
                </Left>
                <Right>
                    <Iphone src={IphoneImage} alt="Iphone" />
                </Right>
            </Card>
        </SpotlightWrapper>
    );
}

const SpotlightWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
`;

const Card = styled.div`
	display: flex;
	justify-content: space-between;
	width: 1169px;
	background: #ffffff;
	border-radius: 8px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	background-color: #000;
	margin-top: 70px;
	align-items: center;
`;

const Left = styled.div`
	padding-left:50px;
	flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Series = styled.div`
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
	/* margin-top: 50px; */
`;

const SeriesTitle = styled.h2`
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	color: #FAFAFA;
`;

const Voucher = styled.div`
	font-size: 48px;
	font-weight: 600;
	line-height: 60px;
	letter-spacing: 0.04em;
	color:#FAFAFA;
	width: 306px;

`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;
  margin-top: 20px;
`;

const Button = styled.button`
    border: none;
    background: none;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-decoration: underline;
    text-underline-offset: 10px;
    cursor: pointer;

    &:hover {
        animation: glow 0.6s forwards; /* Run animation once and stop */
    }

    @keyframes glow {
        0% {
            text-shadow: 0 0 5px #b3d9ff, 0 0 10px #b3d9ff, 0 0 15px #b3d9ff, 0 0 20px #00aaff, 0 0 25px #00aaff, 0 0 30px #00aaff, 0 0 35px #00aaff;
        }
        100% {
            text-shadow: 0 0 2px #b3d9ff, 0 0 4px #b3d9ff, 0 0 6px #b3d9ff, 0 0 8px #00aaff, 0 0 10px #00aaff, 0 0 12px #00aaff, 0 0 14px #00aaff;
        }
    }
`;




const Apple = styled.img`
	width: 40px;
	height: 49px;
	margin-right: 15px;
`;

const Arrow = styled.img`
	width: 16px;
	height: 16px;
`;

const Iphone = styled.img`
	max-width: 100%;
	height: auto;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;

`;
