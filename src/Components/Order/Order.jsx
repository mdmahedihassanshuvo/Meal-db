import React from 'react';
import UiOrder from '../UiOrder/UiOrder';

const Order = ({ order }) => {
    // console.log(props)
    // const {order} = props
    // console.log(order)
    let orderItems = [];
    for (const item of order) {
        orderItems.push(item.idMeal)
        console.log(orderItems)
    }


    return (
        <div>
            <h3 className='text-2xl font-semibold mt-3 mb-2 text-center'>Order Summary</h3> <hr />
            <div className='mt-5 mb-3'>
                <ul className='text-center'>
                    {
                        orderItems.map(orItem => <UiOrder orItem={orItem} key={orItem}></UiOrder>)
                    }
                </ul>

            </div>
        </div>
    );
};

export default Order;