import React, {Component} from 'react';

import './App.css';
import Test from './Component/Test';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return (
            <div className="App">
                <Test/>
            </div>
        );
    }
}

export default App;
