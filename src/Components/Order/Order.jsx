import React from 'react';

const Order = ({order}) => {
    // console.log(props)
    // const {order} = props
    console.log(order)
    return (
        <div>
            <h3 className='text-2xl font-semibold mt-3 mb-2 text-center'>Order Summary</h3> <hr />
            <ol type='number'>
                <li className='text-center'>Selected Item: {} </li>
            </ol>
        </div>
    );
};

export default Order;