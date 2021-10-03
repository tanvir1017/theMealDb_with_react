import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Meal = props => {
    const { strMeal, strArea, strMealThumb, strCategory } = props.meal;
    return (
        <Col>
            <Card className="border-success shadow h-100">
                <Card.Img variant="top" src={strMealThumb} />
                 <Card.Body>
                   <Card.Title>{strMeal} <small className="text-muted">({strArea})</small></Card.Title>
                
                    <Card.Text>
                        <p className="text-muted">{strCategory}</p>
                        
                    </Card.Text>
                    
                </Card.Body>
                </Card>
                </Col>
    );
};

export default Meal;