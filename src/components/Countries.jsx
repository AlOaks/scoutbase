import React, { Component } from 'react';
import styled from 'styled-components';
import CountriesList from './CountriesList.jsx';

export default class Countries extends Component {

    constructor() {
        super();
        this.state = {
        }
    }


    render() {
      
        return (
            <div>
                <h1>Countries</h1>
                <CountriesList />
            </div>
        )
    }
}