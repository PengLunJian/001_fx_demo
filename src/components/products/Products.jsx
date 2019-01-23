import React, {Component} from 'react';
import Product from '../product/Product';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        const {data} = this.props;
        return (
            <div className="section">
                <div className="products row">
                    {
                        (data || []).map((item, index) => {
                            return (
                                <Product item={item} key={index}></Product>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}