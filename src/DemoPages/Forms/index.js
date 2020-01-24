import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// Forms

import FormElementsLayouts from "./Elements/Layouts/";
import FormElementsControls from "./Elements/Controls/";
import FormElementsValidation from "./Elements/Validation/";
import Login from '../../Layout/login';

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Forms = ({match}) => (
    <Fragment>
        {/* <AppHeader/> */}
        <div className="app-main">
        <Login/>
            {/* <AppSidebar/> */}
            {/* <div className="app-main__outer">
                <div className="app-main__inner"> */}

                    {/* Form Elements */}

                       
                    <Route path={`${match.url}/controls`} component={FormElementsControls}/>
                    <Route path={`${match.url}/layouts`} component={FormElementsLayouts}/>
                    <Route path={`${match.url}/validation`} component={FormElementsValidation}/>

                {/* //</div> */}
                {/* <AppFooter/> */}
            {/* </div> */}
        </div>
    </Fragment>
);

export default Forms;