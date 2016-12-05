import React from 'react';
import NavBarWeb from './navBarWeb.js';
import NavBarMobile from './navBarMobile.js';

export default class NavBar extends React.Component {
    render() {
        const {
            headerItems,
            foreignItems } = this.props;
        const mainItems = headerItems.objects.slice(0, 5);
        const otherItems = headerItems.objects.slice(5);
        return (
            <div className="navbar-fixed">
                <nav className="red accent-4" role="navigation">
                    <div className="nav-wrapper container">
                        <a id="logo-container" href="#" className="brand-logo white-text">Caizza</a>
                        <NavBarWeb
                            mainItems={mainItems}
                            otherItems={otherItems}
                            foreignItems={foreignItems}
                        />
                        <NavBarMobile
                            mainItems={mainItems}
                            otherItems={otherItems}
                            foreignItems={foreignItems}
                        />
                        <a href="#" data-activates="nav-mobile" className="button-collapse white-text"><i className="material-icons">menu</i></a>
                    </div>
                </nav>
            </div>
        );
    }
}