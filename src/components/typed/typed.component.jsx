import React from 'react';
import './typed.scss';
import Typed from 'react-typed';

const TypedComponent = ({messages}) => {

    return ( 
       
        <Typed
        loop
        typeSpeed={80}
        backSpeed={80}
        strings={messages}
        backDelay={1000}
        loopCount={0}
        showCursor
        className="self-typed"
        cursorChar="|"
        ></Typed>

     );
}
 
export default TypedComponent;