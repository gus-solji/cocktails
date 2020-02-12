import React, { useContext } from 'react'
import './cocktails-list.scss';
import { CocktailsContext } from '../../context/CocktailsContext';
import Cocktail from '../cocktail/cocktail.component';

const CocktailsList = () => {

    //get the cocktails
    const {cocktails} = useContext(CocktailsContext);
    var notFound;
    if(Object.entries(cocktails) !== 0){
        notFound = true;
    }else{
        notFound = false;
    }

    console.log(notFound);
    // const [cocktails,setCocktails] = useState([]);

    return ( 
            <div className="container">
                <div className="row mt-5 recipes-responsive">
                        {cocktails.map(cocktail =>(
                            <Cocktail key={cocktail.idDrink} cocktail={cocktail} ></Cocktail>
                        ))           
                        }
                </div>
            </div>
      );
}
 
export default CocktailsList;
