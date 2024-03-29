import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import classnames from 'classnames';
import SubComponent from '../Basic/dataSources';
import {dateFormat, datePFormat} from '../../../utils/common';
const axios = require('axios').default;

import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import {
    AreaChart, Area, Line,
    ResponsiveContainer,
    Bar,
    BarChart,
    ComposedChart,
    CartesianGrid,
    Tooltip,
    LineChart
} from 'recharts';

import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import DataSources from '../Basic/dataSources';


const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Page C', uv: 2000, pv: 6800, amt: 2290},
    {name: 'Page D', uv: 4780, pv: 7908, amt: 2000},
    {name: 'Page E', uv: 2890, pv: 9800, amt: 2181},
    {name: 'Page F', uv: 1390, pv: 3800, amt: 1500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data2 = [
    {name: 'Page A', uv: 5400, pv: 5240, amt: 1240},
    {name: 'Page B', uv: 7300, pv: 4139, amt: 3221},
    {name: 'Page C', uv: 8200, pv: 7980, amt: 5229},
    {name: 'Page D', uv: 6278, pv: 4390, amt: 3200},
    {name: 'Page E', uv: 3189, pv: 7480, amt: 6218},
    {name: 'Page D', uv: 9478, pv: 6790, amt: 2200},
    {name: 'Page E', uv: 1289, pv: 1980, amt: 7218},
    {name: 'Page F', uv: 3139, pv: 2380, amt: 5150},
    {name: 'Page G', uv: 5349, pv: 3430, amt: 3210},
];


// const requestData = (pageSize, page, sorted, filtered) => {
//     return new Promise((resolve, reject) => {
//         var subTableData = [];
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(json => subTableData.push(json));
//          let filteredData = subTableData;
//     });
//   };
export default class AnalyticsDashboard1 extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',
            tableData: [],
            subTableData:[],
            loading:0,

        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
       
    }

    componentWillMount(){
      axios.get('https://hawkaidata.net/api/data.php/home/search/72/', {
        params: {
          // ID: 12345
        }
      })
      .then(function (response) {
        console.log(response);
        let currentTableData = response.global;
        this.setState({tableData:currentTableData});
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      }); 
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
    }

    render() {
            const columns = [{
                Header: 'userIdx',
                accessor: 'userIdx',
                show: false
            },
            {
                Header: 'sheetzIdx',
                accessor: 'sheetzIdx',
                show: false
            },
            {
                Header: 'Name',
                accessor: 'name'
            },
            {
                Header: "Created Date",
                accessor: "creationTime",
                style: {
                    textAlign: 'left'
                },
                Cell: props => <div> {dateFormat(props.value, "longDate")} </div>,
            }
        ]

        return (
            <Fragment>

           <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                        <PageTitle
                            heading="Data List"
                            subheading="Upload data, connect, analyze, model, and share"
                            icon="pe-7s-server icon-gradient bg-mean-fruit"
                        />

                        <ReactTable
                            className="-striped -highlight"
                            data={this.state.tableData}
                            columns={columns}
                            minRows= {3}
                            filterable = {true}
                            defaultPageSize={10}
                            defaultSorted={[
                                {
                                  id: "creationTime",
                                  desc: true
                                }
                            ]}

                            SubComponent = {row => {
                                return (
                                  <div style={{ padding: "20px" }}>
                                    <DataSources rowId = {row.original.userIdx}
                                    sheetId = {row.original.sheetzIdx} />
                                  </div>
                                );
                              }}
                        />
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
