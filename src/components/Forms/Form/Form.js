import React from 'react';
import classes from './Form.css';

class Form extends React.Component {
    
    render(){

        return (
            <div className={classes.FormInput}>
                <input onChange={this.props.valueHandler} value={this.props.valueInput}></input>
                <span style={{ visibility: this.props.showChecklist != null? 'visible': 'hidden'}}>&#10004;</span>
            </div>
        )
    }
}

export default Form;