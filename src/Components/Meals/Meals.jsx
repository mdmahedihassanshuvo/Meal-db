import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import './Meals.css'

const Meals = (props) => {
    // console.log(meals)
    // console.log(props.meal)
    const { idMeal, strMealThumb, strArea, strCategory, strTags } = props.meal
    const addToOrder = props.addToOrder
    // let count = 1

    return (
        <div>
            <div className='meal border-2 border-slate-400 rounded-lg'>
                <img className='w-60 p-3' src={strMealThumb} alt="" />
                <div className='p-3'>
                    <p>Food-No: {idMeal}</p>
                    <h2 className='text-base font-semibold'>Country-Food: {strArea}</h2>
                    <p>Category: {strCategory}</p>
                </div>
                <button onClick={()=> addToOrder(props.meal)} className="btn btn-success w-full text-white hover:bg-accent"><span className='text-black'>Add to Order <FontAwesomeIcon icon={faBook} /></span></button>
            </div>
        </div>
    );
};

export default Meals;