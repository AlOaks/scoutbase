import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled, { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import { Normalize } from 'styled-normalize';
import Home from './components/Home.jsx';
import Countries from './components/Countries.jsx';
import CountryDetail from './components/CountryDetail.jsx';
import NoMatch from './components/NoMatch.jsx';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { config, cssColors } from './config/config.js';

const client = new ApolloClient({
    uri: config.endpoint
});

const Global = createGlobalStyle`
    body {
        background: ${cssColors.background};
        font-family: 'Trebuchet MS';
        color: ${cssColors.fonts}

        h1 {
            text-align: center;
            font-weight: bold;
            font-size: 2rem;
        }
    }
`;


const Header = styled.ul`
    background: ${cssColors.accents};
    display: flex;
    padding: 10px;
    height: 30px;
    align-items: center;
    box-shadow: 0 0 8px ${cssColors.fonts}
    li {
        &:first-of-type {
            margin-right: 20px;
        }

        a {
            color: white;
            font-weight: bold;
            text-decoration: none;
            cursor: pointer;
        }
    }
`

const appHistory = createBrowserHistory();

function App() {

        return (
            <ApolloProvider client={client}>
                <Reset />
                <Normalize />
                <Global />
                <Router>
                    <Header>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/countries">Countries</Link></li>
                    </Header>
                        
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/countries" exact component={Countries}/>
                        <Route path="/countries/:code" component={CountryDetail} />
                        <Route component={NoMatch} />
                    </Switch>       
                </Router>
            </ApolloProvider>
            
        )
}

export default App;
