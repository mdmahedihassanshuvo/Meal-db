import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import Order from '../Order/Order';

const LoadData = () => {
    const [meals, setMeals] = useState([])
    const [order, setOrder] = useState([])
    // console.log(typeof cart)
    // console.log(typeof setCart)

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    const addToOrder = (meal) => {
        // console.log(meal)
        const newOrder = [...order, meal]
        setOrder(newOrder)
    }

    return (
        <div className='grid grid-cols-4 gap-6 mt-10'>
            <div className='col-span-3 flex gap-3 ml-9 '>
                {
                    meals.map(meal => <Meals meal={meal} key={meal.idMeal} addToOrder={addToOrder}></Meals>)
                }
            </div>
            <div className='mr-4 bg-orange-500 rounded-lg'>
                <Order order={order}></Order>
            </div>
        </div>
    );
};

export default LoadData;