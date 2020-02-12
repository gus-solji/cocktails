import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const  CocktailsContext = createContext();

const CocktailsProvider = (props) => {

    const [cocktails, setCocktails] = useState([]);
    const [search, searchCocktails] = useState({
        // ingredient:'',
        category: ''
    });
    const [ask,setAsk] = useState(false);

    //destructuring
    const {category } = search;

    useEffect(() => {
        if(ask){
            const getCocktails = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
           
                const result = await Axios.get(url);

               //console.log("Cocktais:",result.data.drinks);
               setCocktails(result.data.drinks);
            }

            getCocktails();
        }
    }, [search])

    return(
        <CocktailsContext.Provider
            value={
                {
                    cocktails,
                    searchCocktails,
                    setAsk
                }
            }
        >
            {props.children}
        </CocktailsContext.Provider>
    )

}

export default CocktailsProvider;