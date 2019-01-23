import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from "./Controller";
import FooterBar from '../../components/footerBar/FooterBar';
import Products from "../../components/products/Products";
import Loading from "../../components/loading/Loading";
import './Index.less';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.title = '首页';
        this.props.ajaxRequestSelectProducts();
    }

    render() {
        const {HOME_REDUCER} = this.props;
        const {products} = HOME_REDUCER;
        const {isLoading} = products;
        const {data} = products;
        return (
            <div className="home">
                <Products data={data}/>
                <Loading isShow={isLoading}/>
                <FooterBar/>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)