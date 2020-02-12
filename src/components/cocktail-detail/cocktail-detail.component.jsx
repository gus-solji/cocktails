import React from 'react'
import './cocktail-detail.scss';
import { withRouter } from 'react-router-dom';

const CocktailDetail = ({cocktail,history}) => {
    
    // console.log(history);

    const getIngredients = cocktail => {
        let ingredients = [];
        for(let i=1; i<16; i++){
            if(cocktail[`strIngredient${i}`]){
                ingredients.push(
                    <li className="instructions" key={i}>{cocktail[`strIngredient${i}`]} {cocktail[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredients;
    }

    return ( 
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                   <img className="img-fluid cocktail-image" src={cocktail.strDrinkThumb} alt=""/>
                </div>

                <div className="col-md-6">
                    <h2 className="my-3 title ">{cocktail.strDrink}</h2>
                    <hr className="line"></hr>
                    <h3 className="my-3 title ">Instructions</h3>
                    <p className="instructions">{cocktail.strInstructions}</p>
                    <h3 className="my-3 title ">Ingredients</h3>
                    <ul>
                        {getIngredients(cocktail)}
                    </ul>
                    <button
                            type="button"
                            className="btn btn-block btn-search mb-4"
                            onClick={ () => history.goBack()}
                    >Go Back</button>
                </div>
            </div>
        </div>
     );
}
 
export default withRouter(CocktailDetail);