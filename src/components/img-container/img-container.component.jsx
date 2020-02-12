import React, { Fragment } from 'react';
import './img-container.scss';
import TypedComponent from '../typed/typed.component';


const IMGContainer = () => {

    const messages = ['Tequila...', 'Vodka...', 'Soda...', 'Party!!' ,'Drink with style!!', 'We love Cocktails!!'];
    
    return ( 
        <Fragment>
            <div className="container-fluid image position-text">
                <div className="col-md-12 position-text">
                    <TypedComponent messages={messages}></TypedComponent>
                </div>
            </div>
        </Fragment>
     );
}
 
export default IMGContainer;