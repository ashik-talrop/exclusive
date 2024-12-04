import React, { useState } from "react";
import styled from "styled-components";
import Downarrow from "../../assets/icons/short-arrow-down.svg";
import Search from "../../assets/icons/search.svg";
import Heart from "../../assets/icons/wishlist.svg";
import Cart from "../../assets/icons/Cart.svg";
import '../../App.css'

// Styled Components

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const languages = ["English", "Malayalam", "Hindi", "Tamil", "Japanese"];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    return (
        <Heading>
            <Sale>
                <Paragraph>
                    Summer Sale For All Swim Suits And Free Express Delivery -
                    OFF 50%!
                    <ShopNow href="#">Shop Now</ShopNow>
                </Paragraph>
                <SelectLanguage>
                    <Right>
                        <LanguageButton onClick={toggleDropdown}>
                            <Language>{selectedLanguage}</Language>
                            <DropDownIcon
                                src={Downarrow}
                                alt="Toggle Dropdown"
                            />
                        </LanguageButton>
                        {isOpen && (
                            <DropDownMenu>
                                {languages.map((lang) => (
                                    <DropDownItem
                                        key={lang}
                                        onClick={() => selectLanguage(lang)}
                                    >
                                        {lang}
                                    </DropDownItem>
                                ))}
                            </DropDownMenu>
                        )}
                    </Right>
                </SelectLanguage>
            </Sale>
            <div className="wrapper">
                <NavSection>
                    <LogoDiv>
                        <Logo>Exclusive</Logo>
                    </LogoDiv>
                    <NavDiv>
                        <List href="#">Home</List>
                        <List href="#">Contact</List>
                        <List href="#">About</List>
                        <List href="#">Sign Up</List>
                    </NavDiv>
                    <CardDiv>
                        <SearchDiv>
                            <Input placeholder="What are you looking for?" />
                            <SearchIcon src={Search} alt="Search" />
                        </SearchDiv>
                        <Liked src={Heart} alt="Heart" />
                        <CartImg src={Cart} alt="Cart" />
                    </CardDiv>
                </NavSection>
            </div>
        <Hr />

        </Heading>
    );
};

export default Header;



const Heading = styled.header`
    height: 50px;
`;

const Sale = styled.div`
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 48px;
`;

const Paragraph = styled.p`
    display: flex;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
`;

const ShopNow = styled.a`
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    text-decoration-line: underline;
    text-underline-position: from-font;
    margin-left: 10px;
    color: #fff;
`;

const SelectLanguage = styled.div`
    display: flex;
    position: absolute;
    right: 158px;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
`;

const LanguageButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Language = styled.p`
    margin-right: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
`;

const DropDownIcon = styled.img`
    width: 10px;
    height: 10px;
`;

const DropDownMenu = styled.ul`
    position: absolute;
    top: 25px;
    right: 0;
    background-color: #fff;
    color: #000;
    list-style: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0;
    padding: 5px 0;
    width: 100px;
    z-index: 10;
`;

const DropDownItem = styled.li`
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
`;

const NavSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
`;

const LogoDiv = styled.div``;

const Logo = styled.h3`
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.03em;
`;

const NavDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 367px;

   
`;

const List = styled.a`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: #000;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        text-underline-offset: 5px;
    }
`;

const CardDiv = styled.div`
    display: flex;
    align-items: center;
`;

const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    background-color: #f5f5f5;
    padding: 10px 10px;
    width: 243px;
    justify-content: space-between;
    border-radius: 6px;
`;

const Input = styled.input`
    border: none;
    padding: 5px 10px;
    margin-right: 5px;
    background-color: #f5f5f5;
    &:focus {
        outline: none; 
        border: none; 
    }
`;

const SearchIcon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

const Liked = styled.img`
    width: 28px;
    height: 28px;
    margin-left: 10px;
    cursor: pointer;
`;

const CartImg = styled.img`
    width: 32px;
    height: 32px;
    margin-left: 10px;
    cursor: pointer;
`;
const Hr = styled.hr`
    border: none;
    border-top: .5px solid #a6a6a6;
    margin-top: -5px;
`;