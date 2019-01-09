import React, {Component} from 'react';
import HelloWorld from './containers/login/Index';
import '../node_modules/normalize.css';
import './assets/less/common.less';
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
