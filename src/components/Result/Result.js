import React from 'react';

class Result extends React.Component {
    render(){
        return (
            <div>
                <hr/>
                Result : <span>{this.props.hasil}</span>
            </div>
        )
    }
}

export default Result;