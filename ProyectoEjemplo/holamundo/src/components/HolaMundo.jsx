import React from 'react';

const HolaMundo = () => {
    
    const hello = 'Hola Mundo!';
    const isTrue = true;
    
    /*
    ClassName es la forma de usar el clásico "class" de HTML,
     en js es palabra reservada

     Tambien tenemos dos formas de usar if
     */
    return (
        <div className = "HolaMundo">
            <h1>{hello}</h1>
            <h2>Curso esencial de React</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React Arepa" />
            {isTrue? <h4>Esto es verdadero</h4> : <h4>Soy falso</h4>}
            {isTrue && <h4>Soy verdadero</h4>}
        </div>
    );
};

export default HolaMundo;