import React from 'react';
import ReactDOM from 'react-dom';

const APIkey='AIzaSyAm8kGp_X1ZdZ6UqeIn9Fs16TjXzrDLzho';

//Create a new component. This component produces some HTML code
const App = () => {
    return <div><ol><li>Chicken</li><li>Chicken</li><li>Chicken</li><li>Chicken</li><li>Chicken</li></ol></div>;
};

//Take the components generated and add it to DOM
ReactDOM.render(<App/>,document.querySelector('.container'));