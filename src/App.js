import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MainPage from './components/pages/MainPage.js';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>Main</Link></li>
                    </ul>

                    <hr />

                    <Route exact path='/' component={MainPage} />
                </div>
            </Router>
        );
    }
}
