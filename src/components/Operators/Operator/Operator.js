import React from 'react';
import classes from './Operator.css';

class Operator extends React.Component {
    render(){
        return (
            <button className={classes.Button} onClick={this.props.klik}>{this.props.children}</button>
        )
    }   
}

export default Operator;