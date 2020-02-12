import React, { useContext, useState } from 'react'
import './form-search.scss';
import { CategoryContext } from '../../context/CategoryContext';
import { CocktailsContext } from '../../context/CocktailsContext';


const FormSearch = () => {


    const {categories} = useContext(CategoryContext);
    const {searchCocktails,setAsk} = useContext(CocktailsContext);
    const [search, setSearch] = useState({ category: ''});
    const [error, setError] = useState(false);

   //read the inputs data
   const  getSearchData = e => {
       setSearch({
           ...search,
           [e.target.name]: e.target.value,
       })
   }

    //get values for the validation
    const {category} = search;

   const handleSubmit = e => {
       e.preventDefault();

       if(category === ''){

        setError(true);
        return;
       }

       searchCocktails(search);
       setAsk(true);
       setError(false);

       //reset form
       setSearch({
       
        category: ''
    })
   }

    return ( 
        <div className="container mt-5">
            <div className="row">
                <form 
                className="col-12"
                onSubmit={handleSubmit}
                >
                    <fieldset className="text-center">
                        <legend className="legend-color">Search cocktails by category</legend>
                    </fieldset>
                    <div className="row mt-4">
                        <div className="col-md-6 mb-4">
                           <select 
                           className="form-control"
                           name="category"
                           onChange={getSearchData}
                           >
                               <option value="">--Select category--</option>
                               {
                                   categories.map(category => (
                                       <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                                   ))
                               }
                           </select>
                        </div>
                        <div className="col-md-6 mb-4">
                          <input
                            type="submit"
                            className="btn btn-block btn-search"
                            value="Search cocktails"
                          ></input>
                        </div>
                    </div>
                </form>
            </div>
            {
                error ? <h1 className="title text-center">All inputs are required</h1> : null
            }
        </div>
    );
}
 
export default FormSearch;