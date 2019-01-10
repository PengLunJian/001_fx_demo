import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import routes from './routes';

export default class CustomerRouter extends Component {
    render() {
        return (
            routes.map((item, index) => {
                return (
                    <Route key={index}
                           path={item.path}
                           name={item.name}
                           exact={item.exact}
                           meta={item.meta.index}
                           component={item.component}/>
                );
            })
        )
    }
};