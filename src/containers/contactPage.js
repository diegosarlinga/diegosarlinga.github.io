import React, { Component } from 'react';
import PageTitle from '../components/pageTitle';
import PageContainer from '../components/pageContainer';
import ContactForm from '../components/contactForm';

export default class ContactPage extends Component {
    render() {
        return (
            <div>
                <PageTitle>
                    Contáctenos
                </PageTitle>
                <PageContainer>
                    <div className="card">
                        <div className="card-content">
                            <div className="row">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </PageContainer>
            </div>
        );
    }
}
