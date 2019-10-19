import React from 'react'

const myStyle = {
    position: 'fixed',
    top: '5px',
    right: '15px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #808080',
    boxShadow: '10px 5px 5px #808080',
    padding: '5px',
    maxWidth: '20%' 
}

export const StateDisplay = props => {

    return (
        <React.Fragment>
            <article style={myStyle}>
                <h3 style={{color: '#FF007F'}}>Current Application state:</h3>
                <p>Number of component re-renders:</p>
                <ul>
                    <li>inputLab: {props.stats.inputLab}</li>
                    <li>func-comp-pattern: {props.stats.about}</li>
                </ul>
            </article>
        </React.Fragment>
    )
}