import React, { useEffect, useState } from 'react';
import { ProgressBar, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const TheMeals = (props) => {
    const { searchText } = props;
    const [meals, setMeals] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    } , [searchText])
    return (
        <>     
        { meals.length  === 0 ? <div className="w-50 mx-auto mt-5 mb-5">      <ProgressBar variant="danger" animated now={95} /></div>
                :
                <Row xs={1} md={4} className="g-4">
                {meals.map(meal => <Meal meal={meal}></Meal>)}
            </Row>
        }
        </>
    );
};

export default TheMeals;