import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import CocktailDetail from '../components/cocktail-detail/cocktail-detail.component';

const CocktailDetailPage = () => {

    const {cocktailId} = useParams();
    console.log(cocktailId);

    const [cocktail,setCocktail] = useState([]);

    useEffect(() => {
        
        const getCocktail = async () => {
            if(!cocktail) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
            
            const result = await Axios.get(url);
            setCocktail(result.data.drinks[0]);
        
        }

        getCocktail();

    },[])


    return (  
        <CocktailDetail cocktail={cocktail}></CocktailDetail>
    );
}
 
export default CocktailDetailPage;