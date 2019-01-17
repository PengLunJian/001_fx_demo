import React, {Component} from 'react';
import {connect} from 'react-redux';
import totalRootReducers from '../../redux/reducers';
import FooterBar from '../../components/FooterBar/FooterBar';
import './Index.less';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log(this);
    }

    render() {
        return (
            <div className="home">
                <h1>首页</h1>
                <FooterBar></FooterBar>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    initIndex: totalRootReducers.handlerIndexReducer(state)
})

export default connect({
    mapStateToProps
})(Home)