import React from 'react';

class ErrorMsg extends React.Component {

    render(){
        if(this.props.isError){
            return <h5>Error : Input hanya satu</h5>
        } else {
            return <hr></hr>;
        }
        }
    }

export default ErrorMsg;