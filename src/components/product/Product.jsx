import React, {Component} from 'react';
import './Product.less';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        const {item} = this.props;
        return (
            <div className="product col-xs-6">
                <div className="item-inner fade">
                    <div className="item-img">
                        <img src={item.img} alt={item.title}/>
                    </div>
                    <div className="item-info">
                        <h2 className="item-title">{item.title}</h2>
                        <em className="item-price">{item.price}￥</em>
                        <span className="item-count">{item.count}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product