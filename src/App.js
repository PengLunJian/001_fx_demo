import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import CustomerRouter from "./router";
import '../node_modules/normalize.css';
import './assets/less/common.less';
import './App.less';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        class HtmlFontSize {
            constructor() {
                this.exeSetFontSize();
            }

            setFontSize() {
                const iWidth = document.body.clientWidth
                    || document.documentElement.clientWidth;
                const fontSize = iWidth / 3.75;
                const oHtml = document.querySelector('html');
                oHtml.style.fontSize = fontSize + 'px';
            }

            exeSetFontSize() {
                this.setFontSize();
                window.onresize = () => {
                    this.setFontSize()
                }
            }
        }

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
