import React from "react";
import styled from "styled-components";
import Header from "../includs/Header";
import Spotlight from "../screens/Spotlight";
import CategorySection from "./CategorySection";
import Footer from "../includs/Footer";

function MainPage() {
    return (
        <>
            <MainContainer>
                <Header />
                <Spotlight />
            </MainContainer>
            <CategorySection />
            <Footer />
        </>
    );
}

export default MainPage;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 130px;
    @media (max-width: 768px) {
        gap: 80px;
    }
    @media (max-width: 480px) {
        gap: 0px;
    }
`;
