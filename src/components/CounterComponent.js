import React from 'react'

const CounterComponent = ({counter = 234, up, down}) =>
    <div>
        <h1> Counter </h1>
        {counter}
        <button onClick={up}>Up</button>
        <button onClick={down}>Down</button>
    </div>

export default CounterComponent;

