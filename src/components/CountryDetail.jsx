import React, { Component } from 'react';
import SingleCountryQuery from './SingleCountryQuery.jsx';


export default class CountryDetail extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div>
                <SingleCountryQuery match={this.props.match.params.code}/>
            </div>
        )
    }
}