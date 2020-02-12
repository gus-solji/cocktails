import React from 'react'
import cardsInfo from './cards.json';
import './cards-container.scss';

const CardsContainer = () => {

    console.log(cardsInfo);

    return (  
        <div className="container-fluid p">
            <div className="row p">

                {
                    cardsInfo.map(cardInfo => (
                    <div key={cardInfo.id} className="box">
                        <div className="imgBox">
                            <img src={cardInfo.photo} alt=""/>
                        </div>
                        <div className="content">
                            <h3>{cardInfo.title}</h3>
                            <p>{cardInfo.info}</p>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default CardsContainer;