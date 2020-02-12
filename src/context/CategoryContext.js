import React, { createContext, useState,useEffect } from 'react';
import Axios from 'axios';

//create the context
export const CategoryContext = createContext();

//always you create a context, also you have to create a provider
//provider contains the functions and state
const CategoryProvider = (props) => {

    //create state in context
    const [categories,setCategories] = useState([]);

    //eject the call to the api
    useEffect(() => {
        const getCategories = async() => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categories = await Axios.get(url);

            setCategories(categories.data.drinks);
        }

        getCategories();
    },[]);

    return(
        <CategoryContext.Provider
        value={{
            categories
        }}
        >
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;