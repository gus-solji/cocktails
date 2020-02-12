import React from 'react';
import './navbar-menu.scss';
import { Link } from 'react-router-dom';
import { faCocktail, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBarMenu = () => {
    return ( 
        <nav className="navbar navbar-expand-md nav-dark bg sticky-top ">
        <div className="navbar-brand"> <Link  className="nav-link text-logo" to="/"> <FontAwesomeIcon icon={faCocktail} /> Cocktails</Link></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"
        >
            <FontAwesomeIcon  className="text-logo" icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item pr-md-5">
                <Link className="nav-link text" to="/cocktails">Search Drinks</Link>
            </li>
            <li className="nav-item pr-md-5">
               <Link className="nav-link text" to="/news">News</Link> 
            </li>
            <li className="nav-item pr-md-5">
                <Link className="nav-link text" to="/videos">Videos</Link>
            </li>
            </ul>
        </div>
    </nav>
    );
}
 
export default NavBarMenu;