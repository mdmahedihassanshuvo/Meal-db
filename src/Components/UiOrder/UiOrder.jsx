import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const UiOrder = ({ orItem }) => {
    // console.log(orItem)
    return (
        <div className='text-center mt-1'>
            <ul>
                <li><FontAwesomeIcon icon={faCheck} /> Ordered item: <span className='text-white'>{orItem}</span></li>
            </ul>
        </div>
    );
};

export default UiOrder;