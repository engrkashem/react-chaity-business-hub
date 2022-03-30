import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurent = () => {

    const [searchText, setSearchTex] = useState('');

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const searchFood = e => {
        setSearchTex(e.target.value)
    }

    return (
        <div className='text-white bg-slate-900'>
            <h2 className='text-4xl text-center pt-6 text-sky-400'>Search Your Favourite Food by Name</h2>
            <div className='flex justify-center my-8'>
                <input onChange={searchFood} className='border-black w-1/2 text-center py-2 rounded-lg ' type="text" name="" id="" placeholder='Enter Your Favourite Food' />
            </div>
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-6 mx-2 '>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurent;