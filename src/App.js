import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import CustomerRouter from "./router";
import Utils from './utils/utils';
import '../node_modules/normalize.css';
import './assets/less/common.less';
import './App.less';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let util = new Utils();
        util.exeHandlerHtmlFontSize();
        util = null;
    }

    render() {
        return (
            <BrowserRouter>
                <CustomerRouter></CustomerRouter>
            </BrowserRouter>
        );
    }
}
