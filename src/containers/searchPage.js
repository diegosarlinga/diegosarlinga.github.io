import React, { Component } from 'react';
import PageSearchTitle from '../components/pageSearchTitle';
import PageContainer from '../components/pageContainer';
import PropertyCard from '../components/propertyCard';

export default class SearchPage extends Component {
    render() {
        return (
            <div>
                <PageSearchTitle>
                    Search
                </PageSearchTitle>
                <PageContainer>
                    <div className="row">
                        <PropertyCard />
                    </div>
                </PageContainer>
            </div>
        );
    }
}
