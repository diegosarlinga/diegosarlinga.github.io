import React from 'react';
import { createListItems, createStaticItem } from './navBarListItemCreator.js';

const navBarWeb = props => (
    <ul className="right hide-on-med-and-down white-text">
        { createListItems('busqueda', props.mainItems) }
        <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Otros<i className="material-icons right">arrow_drop_down</i></a>
            <ul id="dropdown1" className="dropdown-content otros">
                { createListItems('busqueda', props.otherItems) }
            </ul>
        </li>
        <li><a className="dropdown-button" href="#!" data-activates="dropdown2">Exterior<i className="material-icons right">arrow_drop_down</i></a>
            <ul id="dropdown2" className="dropdown-content">
                { createListItems('exterior', props.foreignItems) }
            </ul>
        </li>
        { createStaticItem('contacto', 'Contacto') }
        { createStaticItem('tasaciones', 'Tasaciones') }
    </ul>
);

export default navBarWeb;