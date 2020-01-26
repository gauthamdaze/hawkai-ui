import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import UserForm from './UserDetails'

// DASHBOARDS


// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const AddUser = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                  <UserForm/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default AddUser;