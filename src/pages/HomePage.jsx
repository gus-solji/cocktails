import React, { Fragment } from 'react';
import Header from '../components/header/header.component';
import IMGContainer from '../components/img-container/img-container.component';
import CardsContainer from '../components/cards-container/cards-container.component';
import DivFill from '../components/fill-div/fill-div.component';
import Footer from '../components/footer/footer.component';


const HomePage = () => {

    return ( 
        <Fragment>
            <Header></Header>
            <DivFill></DivFill>
            <IMGContainer></IMGContainer>
            <DivFill></DivFill>
            <CardsContainer></CardsContainer>
            <Footer></Footer>
        </Fragment>
    );
}
 
export default HomePage;