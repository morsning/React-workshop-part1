import React, { useState, useEffect } from 'react'

const myStyle = {
    examples: { 
        border: '2px solid black',
        padding: '20px',
        marginBottom: '10px'
    },
    infoText: {
        maxWidth: '70%' 
    }
}

export const Pattern1 = (props) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(0)
    },[props.currentCount])
    
    const handleIncrease = () => {
        setCount(count + 1)
    }

    console.log("rendered again")
    return (
        <React.Fragment>
            <section style={myStyle.infoText}>
                <h1>Our first demo of using state in a React function component</h1>
                <p>We can use the useState hook in order to give our function-based components component level state.
                    In this function-based component we declare a state variable, a function to change this variables value and specify its inital value.
                    Calling the function in order to change the state variables value will re-render the component.
                    A state variable can be a primitive value as well as an object and we are free to declare multiple state variables if we wish to do so.
                    We never declare state variables inside conditional statements, this will often cause undesirable effects.
                </p>
                <p>
                    In order to modify a components behaviour similarly to how we would use life-cycle methods in a class-based component we use the useEffect
                    hook. We will not cover all use-cases of the useEffect hook but three different behaviours will be demonstrated in this demo application.
                </p>
                <p>In this first pattern/example we are initializing our state variable: count to 0.
                    We then use the useEffect hook adding an array at the end consisting of props.currentCount, this limits the function to only run if props.currentCount changes.
                    The only time props.currentCount changes is when the entire component is re-rendered as a result of calling the updater function passed down from the parent.
                    When the updater function is called the parent will set its state and subsequently re-render this child component passing it the new updated value as props.currentCount.
                    The useEffects condition for running again is now fulfilled and will run its logic.
                    The function passed in as argument to the useEffect function will run and here we set the state: count back to 0 again through the setter function: setCount.
                    This in turn re-renders the component again with its internal state set to 0 but since props.currentCount does not change in this last re-render the useEffects function will not 
                    run again. If it did we would end up in an infinity loop of re-renders. 
                </p>
            </section>
            <p>Component level counter: {count}</p>
            <p>Counter passed down from our App state: {props.currentCount}</p>
            <button onClick={() => {handleIncrease()}}>increase</button>
            <button onClick={() => {props.onCountSubmit(count)}}>submit to parent</button>
        </React.Fragment>
    )
}