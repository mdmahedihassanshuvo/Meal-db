import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const UiOrder = ({ orItem }) => {
    // console.log(orItem)
    return (
        <li style={{listStyleType: 'number'}}>Ordered item: <span className='text-white'>{orItem}</span> <FontAwesomeIcon icon={faCheck} /></li>
    );
};

export default UiOrder;