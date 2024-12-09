import React from "react";
import styled from "styled-components";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/platstore.png";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/icon-instagram.svg";
import linkedin from "../../assets/icons/Icon-Linkedin.svg";
import scanner from "../../assets/images/steyp.svg";
import arrow from "../../assets/icons/send.svg";
import down from "../../assets/icons/short-arrow-down.svg";
export default function Footer() {
    return (
        <Wrapper>
            <FooterContainer>
                <Section>
                    <SectionTitle>
                        Exclusive <DownArrow src={down} alt="down" />{" "}
                    </SectionTitle>
                    <Text>Subscribe</Text>
                    <Text>Get 10% off your first order</Text>
                    <InputContainer>
                        <Input type="email" placeholder="Enter your email" />
                        <Button>
                            <Arrow src={arrow} alt="arrow" />
                        </Button>
                    </InputContainer>
                </Section>
                <Section>
                    <SectionTitle>
                        Support
                        <DownArrow src={down} alt="down" />{" "}
                    </SectionTitle>
                    <Textiii>
                        111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                    </Textiii>
                    <Text>exclusive@gmail.com</Text>
                    <Text>+88015-88888-9999</Text>
                </Section>

                <Section>
                    <SectionTitle>
                        Account
                        <DownArrow src={down} alt="down" />{" "}
                    </SectionTitle>
                    <Link href="#">My Account</Link>
                    <Link href="#">Login / Register</Link>
                    <Link href="#">Cart</Link>
                    <Link href="#">Wishlist</Link>
                    <Link href="#">Shop</Link>
                </Section>

                <Section>
                    <SectionTitle>
                        Quick Link
                        <DownArrow src={down} alt="down" />{" "}
                    </SectionTitle>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms Of Use</Link>
                    <Link href="#">FAQ</Link>
                    <Link href="#">Contact</Link>
                </Section>
                <Section>
                    <SectionTitle>
                        Download App
                        <DownArrow src={down} alt="down" />{" "}
                    </SectionTitle>
                    <TextSmall>Save $3 with App New User Only</TextSmall>
                    <ScannerTab>
                        <Scanner src={scanner} alt="Scanner" />
                        <SocialPlatform>
                        <Linkk href="#">    <Play src={playstore} alt="Google Play" /></Linkk>
                        <Linkk href="#">    <Play src={appstore} alt="App Store" /></Linkk>
                        </SocialPlatform>
                    </ScannerTab>
                    <SocialIcons>
                    <Linkk href="#"> <img src={facebook} alt="Facebook" /> </Linkk>
                    <Linkk href="#">    <img src={twitter} alt="Twitter" /></Linkk>
                    <Linkk href="#">    <img src={instagram} alt="Instagram" /></Linkk>
                    <Linkk href="#">   <img src={linkedin} alt="LinkedIn" /></Linkk>
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
    background-color: #000;
    color: #fff;
    padding: 40px 20px;
`;

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 980px) {
        flex-direction: column;
    }
`;

const Section = styled.div`
    margin: 10px;
    @media (max-width: 980px) {
        margin: 0px 10px;
    }
`;

const SectionTitle = styled.h3`
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.03em;
    @media (max-width: 980px) {
        display: flex;
        justify-content: space-between;
    }
    @media (max-width: 360px) {
        font-size: 18px;
    }
`;

const InputContainer = styled.div`
    display: flex;
    margin-top: 10px;
    border: 1px solid #fff;
    border-radius: 4px;
    @media (max-width: 980px) {
        display: none;
    }
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
    border-radius: 4px;
`;

const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    width: 206px;
    @media (max-width: 980px) {
        display: none;
    }
`;
const ScannerTab = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    @media (max-width: 980px) {
        display: none;
    }
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
    @media (max-width: 980px) {
        display: none;
    }
`;

const Linkk = styled.a`

`

const SocialIcons = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
    margin-top: 20px;

    img {
        width: 24px;
        height: 24px;
    }
    @media (max-width: 980px) {
        display: none;
    }
`;
const SocialPlatform = styled.div`
    width: 105px;
`;
const Play = styled.img`
    width: 104px;
    height: auto;
`;

const Arrow = styled.img`
    width: 20px;
    height: 20px;
`;
const StyledHr = styled.hr`
    border: none;
    border-top: 1px solid #3d3d3d;
    margin: 20px 0;
    width: 100%;
`;

const LastContainer = styled.div`
    display: flex;
    justify-content: center;
`;
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
    color: #fafafa;
    @media (max-width: 980px) {
        display: none;
    }
`;
const Textiii = styled.p`
    width: 182px;
    @media (max-width: 980px) {
        display: none;
    }
`;

const DownArrow = styled.img`
    display: none;
    @media (max-width: 980px) {
        display: block;
    }
`;
