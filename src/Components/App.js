import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';

function App() {
    return (
        <div className="container">
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/:id" component={About} />
            </Router>
        </div>
    );
}

export default App;