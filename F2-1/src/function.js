import React from 'react';
import ReactDOM from 'react-dom';

function Function(props){
  return( <div className="function">
    <h1>This is functional Componenet</h1>
    <p> created by:<span>{props.name}</span></p>

  </div>);
}

export default Function;