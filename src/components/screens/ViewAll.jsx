import React from 'react';
import styled from "styled-components";

import Header from '../includs/Header';
import Footer from '../includs/Footer';
import ViewProducts from './ViewProducts';

function MainPage() {
  return (
    <ViewAllContanier>
        <Header />
            <ViewProducts/>
        <Footer/>
    </ViewAllContanier>
  );
}

export default MainPage;

const ViewAllContanier = styled.div`
    
`