import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import SingleCountry from './SingleCountry.jsx';
import styled from 'styled-components';
import LightSpeed from 'react-reveal/LightSpeed';


const FEED_QUERY = gql`{
    countries {
        name
        native
        code
        languages {
            name
            native
        }
        continent {
            name
        }
    }
}`;

const List = styled.ul`
    width: 95%;
    margin: 0 auto;

    @media only screen and (min-width: 700px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .react-reveal {
            width: 49%;

            .react-reveal {
                width: 100%;
            }
        }
    }

    @media only screen and (min-width: 1000px) {
        .react-reveal {
            width: 33%;
        }
    }
`;

const ResultTag = styled.h3`
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
`;

function GetCountries() {
    const { loading, error, data } = useQuery(
        FEED_QUERY
    );

    if(loading) return <ResultTag className="query-result">Loading...</ResultTag>;
    
    if(error) return <ResultTag classNAme="query-result">Error :(</ResultTag>;

    return (
        <List>
            <LightSpeed left opposite>
                {data.countries.map((country, i) => {
                    return <SingleCountry key={i} country={country} />
                })}
            </LightSpeed>   
        </List>
    )
}

export default GetCountries;


