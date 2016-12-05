import React, { Component } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

export default class AppLayout extends Component {
    render() {
        const {
            headerItems,
            foreignItems } = window;
        return (
            <div>
                <Header
                    headerItems={headerItems}
                    foreignItems={foreignItems}
                />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
