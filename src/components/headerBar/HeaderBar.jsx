import React, {Component} from 'react';
import './HeaderBar.less';

class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        const {title} = this.props;
        return (
            <div className="header">
                <h1 className="title">{title}</h1>
            </div>
        )
    }
}

export default HeaderBar;