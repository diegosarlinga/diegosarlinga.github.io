import React from 'react';

const pageTitle = props => (
    <div className="blue-grey lighten-5">
        <div className="container">
            <div className="section red-text">
                <h5>{props.children}</h5>
            </div>
        </div>
    </div>
);

export default pageTitle;