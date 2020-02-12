import React from 'react';
import { withRouter } from 'react-router-dom';
import './cocktail.scss';

const Cocktail = ({cocktail,history, match}) => {

    const {strDrink,strDrinkThumb,idDrink} = cocktail;
    

    const handleOnClick = () => {
        history.push(`/cocktail/${idDrink}`);
    }
  
    return ( 
        <div className="cocktail-item" onClick={handleOnClick} >
            <div className="background-image" style={{backgroundImage: `url(${strDrinkThumb})`}}></div>
            <div className="content-image">
                <h3 className="title">{strDrink}</h3>
            </div>
        </div>
    );
}
 
export default withRouter(Cocktail);