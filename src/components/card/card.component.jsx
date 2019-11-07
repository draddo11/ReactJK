import React from 'react';

import  './card.styles.scss'; 

export const Card = (props)=> {
    // console.log(props);
    return(

        <div className='card'>
        {props.children}

        </div>

    )

}