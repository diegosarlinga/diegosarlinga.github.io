import React, { Component } from 'react';
import { connect } from 'react-redux'
import PageTitle from '../components/pageTitle';
import PageContainer from '../components/pageContainer';
import PropertyCard from '../components/propertyCard';
import { loadHomeProperties } from '../actions';

function renderProperties(properties) {
    console.log('render', properties);
    return properties.map(property => <PropertyCard />);
}

export class HomePage extends Component {
    componentDidMount() {
        this.props.loadData();
    }
    render() {
        console.log('render home page', this.props);
        return (
            <div>
                <PageTitle>
                    Propiedades Destacadas
                </PageTitle>
                <PageContainer>
                    <div className="row">
                        { renderProperties(this.props.properties) }
                    </div>
                </PageContainer>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
    return {
        properties: state.property.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => {
            dispatch(loadHomeProperties())
        }
    }
}

const HomePageConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

export default HomePageConnected;