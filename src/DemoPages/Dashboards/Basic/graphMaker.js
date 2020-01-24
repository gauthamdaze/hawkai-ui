import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';
import {Button, Dropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
  


export default class GraphMaker extends Component {
    constructor(props){
        super(props);
     
    }
    render() {

        // add switch case to determine th graph type 
        switch(this.props.graphType){
            case 'Bar':{
                            return (
                              
                                    
                                <Bar
                                    data={this.props.graphData}
                                    width={70}
                                    height={30}
                                    options={{
                                    maintainAspectRatio: true
                                    }}
                                />
                               

                            )
                            break; 
                         }

         }
    }
}
