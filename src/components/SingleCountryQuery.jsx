import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import { cssColors } from '../config/config.js';

const COUNTRY_QUERY = gql`
    query getCountry($code: String!) {
        country(code: $code) {
            name
            phone
            currency
            continent {
                name
            }
            languages {
                name
                native
            }
            native
        }
    }
`;

const Section = styled.div`
    width: 95%;
    margin-left: auto;
    margin-right: auto;

    h2 {
        text-align: center;
        font-weight: 1.5rem;
    }

    h4 {
        font-weight: bold;
        margin-top: 10px;
    }

    ul {
        margin-top: 10px;
    }

    li {
        margin-left: 15px;
    }

    .go-back-link {
        margin-top: 30px;

        a {
            background: ${cssColors.accents};
            color: ${cssColors.background}
            border-radius: 5px;
            padding: 10px;
        }
    }

`;

function GetSingleCountry( {match} ) {

    const { loading, error, data } = useQuery(
        COUNTRY_QUERY,
        {
            variables: { code: match }
        }
    );

    if(loading) return <h3>Loading...</h3>;
    if(error) return <h3>Error</h3>;

    const country = data.country;

    return (
        <Section>
            <h1>{country.name}</h1>
            <h2>{country.native}</h2>
            <h4>Part of: {country.continent.name}</h4>
            <h4>Phone Code: {country.phone}</h4>
            <h4>Currency: {country.currency}</h4>
            <div>
                <h4>Languages:</h4>
                <ul>
                    {country.languages.map((lang, i) => {
                        return <li key={i}>{lang.name} <span>({lang.native})</span></li>
                    })}
                </ul>
            </div>
            <div className="go-back-link">
                <a href="/countries">Go Back</a>
            </div>
        </Section>
    )
}

export default GetSingleCountry;