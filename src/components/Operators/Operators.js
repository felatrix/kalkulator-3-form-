import React from 'react';
import Operator from './Operator/Operator';
import classes from './Operators.css';

class Operators extends React.Component {
    render(){
        return (
            <div className={classes.Operators}>
                <Operator klik={this.props.tambah}>+</Operator>
                <Operator klik={this.props.kurang}>-</Operator>
                <Operator klik={this.props.kali}>x</Operator>
                <Operator klik={this.props.bagi}>/</Operator>
            </div>
        )
    }
}

export default Operators;