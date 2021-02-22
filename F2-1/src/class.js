import React from 'react';

class Class extends React.Component {

    render(){
        return (
            <div className="class">
                <h1>This is Class Componenet</h1>
                <p> created by:<span> {this.props.rollno}</span></p>
            </div>
        )
    }
        
    

}

export default Class;