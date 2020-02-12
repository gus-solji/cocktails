import React from 'react'
import './spinner.scss';

const Spinner = () => {
    return ( 
        <div className="container text-center flex-spinner">
            <div class="lds-hourglass"></div>
        </div>
        
     );
}
 
export default Spinner;