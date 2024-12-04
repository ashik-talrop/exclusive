import React from 'react';
import styled from 'styled-components';
import Header from '../includs/Header';
import Spotlight from '../screens/Spotlight';
import CategorySection from './CategorySection';
import Footer from '../includs/Footer';

function MainPage() {
  return (
    <MainContainer>
      <Header />
      <Spotlight />
      <CategorySection/>
      <Footer/>
    </MainContainer>
  );
}

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
