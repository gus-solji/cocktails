import React, { Fragment } from 'react'
import './header-search-title.scss';
import TypedComponent from '../typed/typed.component';

const HeaderSearchTitle = () => {

    const messages = ['Search cocktails!!'];

    return (
        <Fragment>
                <TypedComponent messages={messages}></TypedComponent>
        </Fragment>
    );
}
 
export default HeaderSearchTitle;