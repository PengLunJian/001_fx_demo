import React, {Component} from 'react-dom';
import './Error.less';

export default class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        return (
            <div className="Error">
                <div className="content">
                    <i className="icon-error"></i>
                    <button className="btn btn-refresh">重新加载</button>
                </div>
            </div>
        )
    }
}