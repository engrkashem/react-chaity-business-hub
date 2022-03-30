import React from 'react';
import { useNavigate } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { strMeal, strCategory, strMealThumb, strArea, idMeal } = meal;

    let navigate = useNavigate();

    const showMealDetails = () => {
        const path = `/restaurent/${idMeal}`;
        navigate(path);
    }
    // console.log(meal)
    return (
        <div className='border-2 border-sky-500 rounded-lg'>
            <img className='rounded-lg' src={strMealThumb} alt="" />
            <div className='ml-2 my-2'>
                <h2 className='text-4xl'>{strMeal}</h2>
                <p>{strCategory}</p>
                <p>{strArea}</p>
                <div className='flex justify-center mt-4 '>
                    <button onClick={showMealDetails} className='border-2 border-sky-500 px-8 py-1 rounded-lg bg-teal-600 font-medium'>Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default Meal;