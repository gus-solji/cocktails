import React from 'react'
// import HeaderSearchTitle from '../components/header-search-title/header-search-title.component';
import FormSearch from '../components/form-search-container/form-search.component';
import CategoryProvider from '../context/CategoryContext';
import CocktailsProvider from '../context/CocktailsContext';
import CocktailsList from '../components/cocktail-list/cocktails-list';
import IMGContainer from '../components/img-container/img-container.component';
import CocktailDetailProvider from '../context/CocktailDetailContext';
// import Spinner from '../components/spinner/spinner.component';
 


const SearchPage = () => {
    
   const messages = ['Search cocktails!!'];
    
    return ( 
       <CategoryProvider>
          <CocktailsProvider>
             <CocktailDetailProvider>
            <IMGContainer messages={messages}></IMGContainer>
            <FormSearch></FormSearch>
            <CocktailsList ></CocktailsList>
            </CocktailDetailProvider>
          </CocktailsProvider>
       </CategoryProvider>
    )
}
 
export default SearchPage;