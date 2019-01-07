import React, {Component} from 'react';
import HelloWorld from './containers/login/Index';
import './App.less';

class App extends Component {
    render() {
        return (
            <div className="App">
                <HelloWorld/>
            </div>
        );
    }
}

export default App;
