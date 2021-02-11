// High Order Component (HOC) - a component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <h2>{props.mymsg}</h2>
            <p>This is private info. Please don't share!</p>
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                (props.isAuthenticated) 
                ? <WrappedComponent {...props} />
                : <p>Please provide the authentication credentials</p>
            }
        </div>
    );
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo mymsg="Test test test" info="Theses are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Theses are the details"/>, document.getElementById('app'));