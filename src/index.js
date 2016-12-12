import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component that produces some HTML

const App = () => {
    return <div>Hi!</div>;
}

// Take the component's generated HTML and insert it into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
