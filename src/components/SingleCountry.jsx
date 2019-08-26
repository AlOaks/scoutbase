import React, { Component } from 'react';
import  styled  from 'styled-components';
import { cssColors } from '../config/config.js';
import Fade from 'react-reveal/Fade';

const ListItem = styled.li`
    background: ${cssColors.accents};
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 2px gray;
    margin-bottom: 5px; 
    cursor: pointer;
    transition-duration: .5s;

    &:hover {
        box-shadow: 0 0 10px black;
        transition-duration: .5s;
    }
`;

const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${cssColors.background}

    span {
        font-weight: bold;
    }
`;

const ItemOpened = styled.div`
    padding: 10px;
    color: ${cssColors.background};
    
    p, div {
        margin-bottom: 3px;
    }

    li {
        margin-left: 10px;
        display: flex;

        span {
            margin-left: 5px;
        }
    }

    .link {
        margin-top: 20px;
        height: auto;

        a {
            color: ${cssColors.accents}
            background: ${cssColors.background}
            padding: 10px;
            border-radius: 5px; 
            text-decoration: none;
        }
    }
`;

export default class SingleCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    render() {
        let country = this.props.country;

        return (
            <ListItem onClick={() => this.setState({visible: !this.state.visible})}>
                <ListHeader>
                    <p>{country.name}</p>
                </ListHeader>
                {this.state.visible ? 
                <Fade opposite>
                    <ItemOpened>
                        <p>in Native Language: {country.native}</p>
                        <p>Part of: {country.continent.name}</p>
                        <div>
                            <p>Languages: </p>
                            <ul>
                                {country.languages.map((lang) => {
                                    return (
                                        <li>
                                            {lang.name} <span>({lang.native})</span>
                                        </li>
                                    )
                                })}
                            </ul> 
                        </div>
                        <p className="link"><a href={`/countries/${country.code}`}>Learn more</a></p>
                    </ItemOpened>
                </Fade>
                
                : 
                ''
                }     
            </ListItem>
        )
    }
}