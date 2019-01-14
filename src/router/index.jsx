import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import routes from './routes';

export default class CustomerRouter extends Component {
    constructor(props) {
        super(props);
        this.ROUTES = [];
    }

    componentWillMount() {
        this.handlerRoutes();
    }

    handlerRoutes() {
        for (let key in routes) {
            this.ROUTES.push(routes[key]);
        }
        return this.ROUTES;
    }

    render() {
        return (
            <div className="App">
                {
                    this.ROUTES.map((item, index) => {
                        return (
                            <Route key={index}
                                   path={item.path}
                                   name={item.name}
                                   exact={item.exact}
                                   meta={item.meta.index}
                                   component={item.component()}/>
                        )
                    })
                }
            </div>
        )
    }
};