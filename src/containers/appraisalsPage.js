import React, { Component } from 'react';
import PageTitle from '../components/pageTitle';
import PageContainer from '../components/pageContainer';
import AppraisalsForm from '../components/appraisalsForm';

export default class AppraisalsPage extends Component {
    render() {
        return (
            <div>
                <PageTitle>
                    Tasaciones
                </PageTitle>
                <PageContainer>
                    <AppraisalsForm />
                </PageContainer>
            </div>
        );
    }
}
