import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import CustomerRouter from "./router";
import HtmlFontSize from './library/HtmlFontSize';
import '../node_modules/normalize.css';
import './assets/less/common.less';
import './App.less';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        new HtmlFontSize();
    }

    render() {
        return (
            <BrowserRouter>
                <CustomerRouter></CustomerRouter>
            </BrowserRouter>
        );
    }
}
