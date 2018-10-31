import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home/home';

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
        </Router>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
