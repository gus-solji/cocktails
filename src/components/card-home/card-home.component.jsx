import React, { Fragment } from 'react';
import './card-home.scss';


const CardHome = () => {
    return ( 
        <Fragment>
            <div className="card img-fluid bg-dark text-white containt">
               <img className="card-img-top content" src="/assets/img/cocktails.jpeg" alt="imagecard"/>
            </div>
        </Fragment>
       
     );
}
 
export default CardHome;