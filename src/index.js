import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {PropTypes} from  'prop-types';
import './index.css';

import * as serviceWorker from './serviceWorker';

class Greeter extends Component{
    render() {
        return(
            <h1>
                {this.props.salutation}
            </h1>
        )
    }
}
Greeter.propTypes = {
    salutation: PropTypes.string.isRequired
}
Greeter.defaultProps = {
    salutation:"Hello World"
}



ReactDOM.render(<Greeter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();












