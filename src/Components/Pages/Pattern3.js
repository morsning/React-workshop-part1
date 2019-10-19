import React, { useState, useEffect } from 'react'

export const Pattern3 = (props) => {

    const [count, setCount] = useState(props.currentCount);
    
    useEffect(() => {
        setCount(props.currentCount)
    },[props.currentCount])


    const handleIncrease = () => {
        setCount(count + 1)
    }

    console.log("rendered again")
    return (
        <React.Fragment>
            <h1>Demo of the useState as well as useEffect hook</h1>
            <p>{count}</p>
            <p>{props.currentCount}</p>
            <button onClick={() => {handleIncrease()}}>increase</button>
            <button onClick={() => {props.onCountSubmit(count)}}>submit to parent</button>
        </React.Fragment>
    )
}