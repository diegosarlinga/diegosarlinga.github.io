import React from 'react';
import Paralax from './paralax';
import NavBar from './navBar';

const header = props => (
    <div>
        <NavBar
            headerItems={props.headerItems}
            foreignItems={props.foreignItems}
        />
        <Paralax />
    </div>
);

export default header;