import React from 'react';
import Form from './Form/Form';

class Forms extends React.Component {

    render(){
        return (
            <div>
                <Form valueHandler={this.props.valueHandler1} valueInput={this.props.value1} showChecklist={this.props.showChecklist1}/>
                <Form valueHandler={this.props.valueHandler2} valueInput={this.props.value2} showChecklist={this.props.showChecklist2}/>
                <Form valueHandler={this.props.valueHandler3} valueInput={this.props.value3} showChecklist={this.props.showChecklist3}/>
            </div>
        )
    }
}

export default Forms;