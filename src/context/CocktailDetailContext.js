import React, {createContext, useEffect, useState} from 'react';
import Axios from 'axios';

//create the context
export const CocktailDetailContext = createContext();

const CocktailDetailProvider = (props) => {

    //state
    const [idCocktail,setIdCocktail] = useState(null);
    

    useEffect(() => {
        
        const getCocktail = async () => {
            if(!idCocktail) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktail}`;
            
            const result = await Axios.get(url);
            console.log(result.data.drinks[0]);
        
        }

        getCocktail();

    },[idCocktail])

    return(
        <CocktailDetailContext.Provider
        value={{
            idCocktail,
            setIdCocktail
        }}>
            {props.children}
        </CocktailDetailContext.Provider>
    )
}
export default CocktailDetailProvider;