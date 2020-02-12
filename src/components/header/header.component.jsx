import React from 'react';
import './header.scss';
import CardHome from '../card-home/card-home.component';

const Header = () => {
    return (
        
        <div className="container mt-5 mb-5 container-size">
            <div className="row">
                <div className="col-md-6 position">
                   <CardHome></CardHome>
                </div>
                <div className="col-md-6 position">
                  <div className="welcome-text">
                    <h1>Welcome to the website about Cocktails recipes. 
                        Get new Cocktails for your partys!! Drink carefully!!</h1>

                        <h1>Go ahead!! Enjoy it!!</h1>
                  </div>
                </div>
            </div>
        </div>
      
      );
}
 
export default Header;