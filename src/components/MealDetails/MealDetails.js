import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetails = () => {

    const { idMeal } = useParams();
    console.log(idMeal)

    const [meal, setMeal] = useState({});
    console.log(meal)

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [idMeal])

    return (
        <div>
            <h1 className='text-3xl text-white'>This is meal details</h1>
        </div>
    );
};

export default MealDetails;