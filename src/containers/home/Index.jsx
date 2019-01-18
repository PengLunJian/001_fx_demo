import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ajaxRequestSelectProducts} from '../../redux/actions';
import FooterBar from '../../components/FooterBar/FooterBar';
import './Index.less';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.ajaxRequestSelectProducts();
    }

    render() {
        const {props} = this;
        const {isLoading} = props;
        console.log(props);
        return (
            <div className="home">
                <h1>首页{isLoading.toString()}</h1>
                <FooterBar></FooterBar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {HOME_REDUCER} = state;
    return {
        ...HOME_REDUCER
    };
}

const mapDispatchToProps = () => {
    return {
        ajaxRequestSelectProducts
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)