import React, { Component } from 'react';
import styled from 'styled-components';

const Description = styled.div`
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    text-align: justify;

    .libraries {
        h2 {
            font-size: 1.5rem;
            margin-top: 10px;
        }

        li {
            margin-left: 15px;
            margin-top: 10px;
        }
    }

    span {
        font-weight: bold;
    }

    @media only screen and (min-width: 1000px) {
        width: 50%;
    }
`;

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Description>
                    <p>
                        Web App to display Countries list with some properties. 
                        This is the Front End Challenge from ScoutBase for their Javascript Hiring process.
                    </p> 
                    <span> Made by Alberto Robles</span>
                    <div className="libraries">
                        <h2>Libraries Used:</h2>
                        <ul>
                            <li>apollo-client</li>
                            <li>apollo-boost</li>
                            <li>@apollo/react-hooks</li>
                            <li>react-reveal</li>
                            <li>react-router-dom</li>
                            <li>styled-components</li>
                            <li>styled-reset</li>
                            <li>styled-normalize</li>
                        </ul>
                    </div>
                </Description>
            </div>
        )
    }
}