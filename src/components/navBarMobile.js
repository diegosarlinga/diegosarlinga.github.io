import React from 'react';
import { createListItems, createStaticItem } from './navBarListItemCreator.js';

const navBarMobile = props => (
    <ul id="nav-mobile" className="side-nav">
        { createListItems('busqueda', props.mainItems) }
        <li className="no-padding">
            <ul className="collapsible collapsible-accordion">
                <li>
                    <a className="collapsible-header">Otros<i className="mdi-navigation-arrow-drop-down right"></i></a>
                    <ul className="collapsible-body">
                        { createListItems('busqueda', props.otherItems) }
                    </ul>
                </li>
            </ul>
        </li>
        <li className="no-padding">
            <ul className="collapsible collapsible-accordion">
                <li>
                    <a className="collapsible-header">Exterior<i className="mdi-navigation-arrow-drop-down right"></i></a>
                    <ul className="collapsible-body">
                        { createListItems('exterior', props.foreignItems) }
                    </ul>
                </li>
            </ul>
        </li>
        { createStaticItem('contacto', 'Contacto') }
        { createStaticItem('tasaciones', 'Tasaciones') }
    </ul>
);

export default navBarMobile;