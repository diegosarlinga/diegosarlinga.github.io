import React from 'react';
import {Route, IndexRoute} from 'react-router';
import AppLayout from '../containers/AppLayout';
import HomePage from '../containers/HomePage';
import ContactPage from '../containers/ContactPage';
import AppraisalsPage from '../containers/AppraisalsPage';
import SearchPage from '../containers/SearchPage';
import ForeignPage from '../containers/foreignPage';
// import PersonList from '../components/example/person/PersonList';
// import PersonForm from '../components/example/person/PersonForm';
// import LoadingPage from '../containers/LoadingPage';

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={HomePage}
                onEnter={enter()} onLeave={leave()}/>
    <Route path="contacto" component={ContactPage}/>
    <Route path="tasaciones" component={AppraisalsPage}/>
    <Route path="busqueda/:id" component={SearchPage}/>
    <Route path="exterior/:id" component={ForeignPage}/>
  </Route>
);

function enter() {
  console.debug('enter');
}

function leave() {
  console.debug('leave');
}
