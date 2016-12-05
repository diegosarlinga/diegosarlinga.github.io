import React from 'react';

const pageContainer = props => (
    <div className="container">
        <div className="section">
            {props.children}
        </div>
    </div>
);

export default pageContainer;