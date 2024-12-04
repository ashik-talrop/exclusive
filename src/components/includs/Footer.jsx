import React from 'react';
import styled from 'styled-components';
import appstore from "../../assets/images/appstore.png"
import playstore from "../../assets/images/platstore.png"
import facebook from "../../assets/icons/facebook.svg"
import twitter from "../../assets/icons/twitter.svg"
import instagram from "../../assets/icons/icon-instagram.svg"
import linkedin from "../../assets/icons/Icon-Linkedin.svg"
import scanner from "../../assets/images/steyp.svg"
import arrow from "../../assets/icons/send.svg"


export default function Footer() {
  return (
    <Wrapper>
      <FooterContainer>
        {/* Exclusive Section */}
        <Section>
          <SectionTitle>Exclusive</SectionTitle>
          <Text>Subscribe</Text>
          <Text>Get 10% off your first order</Text>
          <InputContainer>
            <Input type="email" placeholder="Enter your email" />
            <Button>
                <Arrow src={arrow} alt="arrow"/>
            </Button>
          </InputContainer>
        </Section>

        {/* Support Section */}
        <Section>
          <SectionTitle>Support</SectionTitle>
          <Textiii>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</Textiii>
          <Text>exclusive@gmail.com</Text>
          <Text>+88015-88888-9999</Text>
        </Section>

        {/* Account Section */}
        <Section>
          <SectionTitle>Account</SectionTitle>
          <Link href="#">My Account</Link>
          <Link href="#">Login / Register</Link>
          <Link href="#">Cart</Link>
          <Link href="#">Wishlist</Link>
          <Link href="#">Shop</Link>
        </Section>

        {/* Quick Link Section */}
        <Section>
          <SectionTitle>Quick Link</SectionTitle>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms Of Use</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Contact</Link>
        </Section>

        {/* Download App Section */}
        <Section>
          <SectionTitle>Download App</SectionTitle>
          <TextSmall>Save $3 with App New User Only</TextSmall>
            <ScannerTab>
                <Scanner src={scanner} alt="Scanner" />
                <SocialPlatform>
                    <Play src={playstore} alt="Google Play" />
                    <Play src={appstore} alt="App Store" />
                </SocialPlatform>
            </ScannerTab>
          <SocialIcons>
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
            <img src={instagram} alt="Instagram" />
            <img src={linkedin} alt="LinkedIn" />
          </SocialIcons>
        </Section>
      </FooterContainer>
      <StyledHr />
        <LastContainer>
        <CopyrightText>
            © Copyright Rimel 2022. All rights reserved
        </CopyrightText>
        </LastContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #000; /* Black background */
  color: #fff; /* White text */
  padding: 40px 20px;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.div`
  /* flex: 1; */
  margin: 10px;
`;

const SectionTitle = styled.h3`
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.03em;
    

`;

const InputContainer = styled.div`
    display: flex;
    margin-top: 10px;
    border: 1px solid #fff;
`;

const Input = styled.input`
  padding: 10px;
  flex: 1;
  border-right: none;
  background: none;
  color: #fff;
  border: none;
  width: 138px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #000000;
    color: #000;
    border: none;
    cursor: pointer;
`;

const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    width: 206px;
`;
const ScannerTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  
`;

const Scanner = styled.img`
  width: 80px;
  height: 80px;
`;

const Link = styled.a`
  display: block;
  margin: 5px 0;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
    margin-top: 20px;

  img {
    width: 24px;
    height: 24px;
  }
`;
const SocialPlatform = styled.div`
    width: 105px;
    
`
const Play  = styled.img`
     width: 104px;
     height: auto;
`

const Arrow  = styled.img`
     width: 20px;
     height: 20px;
`
const StyledHr = styled.hr`
    border: none;
    border-top: 1px solid #3d3d3d; 
    margin: 20px 0;
    width: 100%;
`;

const LastContainer = styled.div`
    display: flex;
    justify-content: center;
`
const CopyrightText = styled.p`
  text-align: center;
  margin-top: 20px;
  width: 386px;
  color: #3d3d3d;

`;

const TextSmall = styled.p`
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color:#FAFAFA;

`;
const Textiii = styled.p`
    width: 182px;
`;