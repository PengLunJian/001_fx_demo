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
        this.state = {
            pageCode: 1
        };
    }

    componentDidMount() {
        document.title = '首页';
        const {pageCode} = this.state;
        const data = {pageCode};
        this.props.ajaxRequestSelectProducts(data);
    }

    render() {
        const {HOME_REDUCER} = this.props;
        const {products} = HOME_REDUCER;
        const {isLoading,data} = products;
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