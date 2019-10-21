import React from 'react'
import { Link } from "react-router-dom";

const myStyle = {
        ul: {
            listStyleType: 'none',
            fontSize: '20px',
            backgroundColor: '#D3D3D3',
            padding: '20px'
        },
        li: {
            display: 'inline',
            margin: '10px'
        }
}

export const Nav = props => {

    return (
        <React.Fragment>
            <nav>
                <ul style={myStyle.ul}>
                    <li style={myStyle.li}>
                        <Link to={'/'}>Part 1</Link>
                    </li>
                    <li style={myStyle.li}>
                        <Link to={'/CCompDemo1'}>Class-comp-lifecycle</Link>
                    </li>
                    <li style={myStyle.li}>
                        <Link to={'/more-reuse'}>More reuse</Link>
                    </li>
                    <li style={myStyle.li}>
                        <Link to={'/pattern1'}>Func-comp-pattern-1</Link>
                    </li>
                    <li style={myStyle.li}>
                        <Link to={'/pattern2'}>Func-comp-pattern-2</Link>
                    </li>
                    <li style={myStyle.li}>
                        <Link to={'/pattern3'}>Func-comp-pattern-3</Link>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}