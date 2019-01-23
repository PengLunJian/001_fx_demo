import React, {Component} from 'react';
import './Loading.less';

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRemove: false
        };
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        const {isShow} = nextProps;
        if (!isShow) {
            setTimeout(() => {
                this.setState({
                    isRemove: true
                });
            }, 300);
        } else {
            this.setState({
                isRemove: false
            });
        }
    }

    render() {
        const {isShow} = this.props;
        const {isRemove} = this.state;
        const clazz = 'loading' + (isShow ? '' : ' hide');
        return isRemove ? null : (
            <div className={clazz}>
                <div className="loading-inner">
                    <div className="loading-item"></div>
                    <div className="loading-item"></div>
                    <div className="loading-item"></div>
                </div>
            </div>
        )
    }
}