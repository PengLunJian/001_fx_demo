import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    ajaxRequestSelectAccount,
    ajaxRequestSelectProducts
} from '../../redux/actions';
import FooterBar from '../../components/footerBar/FooterBar';
import './Index.less';
import Product from "../../components/product/Product";
import HeaderBar from "../../components/headerBar/HeaderBar";
import Loading from "../../components/loading/Loading";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const data = [
            {
                img: require('../../assets/images/iphone.jpg'),
                title: '我是测试标题',
                price: '150.00'
            },
            {
                img: require('../../assets/images/iphone.jpg'),
                title: '我是测试标题',
                price: '150.00'
            },
            {
                img: require('../../assets/images/iphone.jpg'),
                title: '我是测试标题',
                price: '150.00'
            },
            {
                img: require('../../assets/images/iphone.jpg'),
                title: '我是测试标题',
                price: '150.00'
            },
            {
                img: require('../../assets/images/iphone.jpg'),
                title: '我是测试标题',
                price: '150.00'
            },
            {
                img: require('../../assets/images/iphone.jpg'),
                title: '我是测试标题',
                price: '150.00'
            },
            {
                img: require('../../assets/images/iphone.jpg'),
                title: '我是测试标题',
                price: '150.00'
            },
            {
                img: require('../../assets/images/iphone.jpg'),
                title: '我是测试标题',
                price: '150.00'
            },
            {
                img: require('../../assets/images/iphone.jpg'),
                title: '我是测试标题',
                price: '150.00'
            },
            {
                img: require('../../assets/images/iphone.jpg'),
                title: '我是测试标题',
                price: '150.00'
            }
        ];
        this.props.ajaxRequestSelectAccount();
        this.props.ajaxRequestSelectProducts(data);
    }

    render() {
        const {HOME_REDUCER} = this.props;
        const {products} = HOME_REDUCER;
        const {isLoading} = products;
        const {data} = products;
        return (
            <div className="home">
                <HeaderBar title="首页"/>
                <div className="products row">
                    {
                        (data || []).map((item, index) => {
                            return (
                                <Product item={item} key={index}></Product>
                            )
                        })
                    }
                </div>
                <Loading isShow={isLoading}/>
                <FooterBar/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {
        HOME_REDUCER,
        USER_REDUCER
    } = state;
    return {
        HOME_REDUCER,
        USER_REDUCER
    };
}

const mapDispatchToProps = () => {
    return {
        ajaxRequestSelectAccount,
        ajaxRequestSelectProducts
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)