import React, { Component } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import { WithContext as Input } from 'react-tag-input';
import GraphMaker from './graphMaker';
//import {headers} from './docs/data.js/index.js';
// import { colourOptions } from './docs/data';
import Demo from './Inputfield.js';
import {Button, ButtonGroup} from 'reactstrap';
import Select from 'react-select';
import Example from './example';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require ('./dataSource.css');




export default class DataSources extends Component {
    constructor(props){
        super(props);
        this.state = {
          charts : '',
            doesGraphShowed:false,
            colourOptions : [
              { value: 'ocean', label: 'storenum', color: '#00B8D9', isFixed: true },
              { value: 'blue', label: 'OPENDATE', color: '#0052CC', isDisabled: true },
              { value: 'purple', label: 'conversion', color: '#5243AA' },
              { value: 'red', label: 'date_super', color: '#FF5630', isFixed: true },
              { value: 'orange', label: 'STREETADDR', color: '#FF8B00' },
              { value: 'yellow', label: 'STRCITY', color: '#FFC400' },
              { value: 'green', label: 'storenum', color: '#36B37E' },
              { value: 'forest', label: 'date_super', color: '#00875A' },
              { value: 'slate', label: 'Slate', color: '#253858' },
              { value: 'silver', label: 'conversion', color: '#666666' },
            ],
            tableData:[],
            tableColumns:[]
          };
          
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleTagClick = this.handleTagClick.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.addList= this.addList.bind(this);
     
    
    }
    componentWillMount(){
        

    }

    componentWillReceiveProps(nextProps){
        

    }

  // input tag functionality   
    handleDelete(i) {
      const { tags } = this.state;
      this.setState({
        tags: tags.filter((tag, index) => index !== i),
      });
    }
  
    handleAddition(tag) {
     this.setState(state => ({ tags: [...state.tags, tag] }));
    }
  
    handleDrag(tag, currPos, newPos) {
      const tags = [...this.state.tags];
      const newTags = tags.slice();
  
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);
  
      // re-render
      this.setState({ tags: newTags });
    }
  
    handleTagClick(index) {
      console.log('The tag at index ' + index + ' was clicked');
    }
    optionClicked(optionsList) {
            this.setState({ multiSelect: optionsList });
      }
      selectedBadgeClicked(optionsList) {
            this.setState({ multiSelect: optionsList });
      }

  // genration of graph 

      graphData(tags){


        let tagsToPost = []
        // for (let i =0 ; i < tags.length; i ++){
        //   tagsToPost.push(tags[i]['text']);
        // }
        let urlID = this.props.rowId;
        let url =  "http://hawkaidata.net/api/execCommand.php?fileId="+urlID+"&command="+tagsToPost;
        let parameters = "fileId="+urlID+'&command'+tagsToPost;
        
        // api call
        let dummyGraphData  = { labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                borderCapStyle: 'round',
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
      }
      this.state.charts = <GraphMaker closeGraph = {this.closeGraph.bind(this)} graphData = {dummyGraphData} graphType = 'Bar' />; 
      this.setState({doesGraphShowed:true});

      //  var xhr = new XMLHttpRequest();
      //  xhr.open("Get", url, true);
      //  xhr.withCredentials = true;
      //  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      //  xhr.send(parameters);
      //  xhr.onreadystatechange = function() {
       
      //    if (xhr.readyState === 4){
      //      if (xhr.status === 200){
      //            console.log(xhr.responseText);
      //       } else{
      //         console.log('Oops! Something went wrong', xhr.statusText);
      //         this.charts = <GraphMaker graphData = {dummyGraphData} graphType = 'Bar' />; 
      //      } 
      //   } 
      //  }


      }

  // init data   for the table    

    fetchData() {
        let urlID = this.props.rowId;
        let sheetId = urlID+ this.props.sheetId;
         let url = 'https://hawkaidata.net/api/data.php/home/getSheetHeaderAndData/'+urlID+'/'+sheetId;
         axios.get(url, {
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

  // close the genarated graph
  closeGraph(){
    this.setState({charts:''})
  }


  // AddList to Input field

    addList (state, rowInfo, column, instance) {
      console.log('1');
      let headersToPost = [];
      headersToPost.push(column.Header);
      headersToPost.push(this.props.rowId);
      return {
          onClick: e => {
            let newTag = {id:column.Header,text:column.Header}
            this.setState(state => ({ colourOptions: [...state.colourOptions, newTag] }));
          }
      }
  }
    render() {
      // variable for input field
      const { tags, suggestions } = this.state;
      const selectedOptionsStyles = {
                                      color: "#3c763d",
                                      backgroundColor: "#dff0d8"
                                     };
      const optionsListStyles = {
          backgroundColor: "#dff0d8",
          color: "#3c763d"
      };
      // variable for react table 
        const tableColumns = [{
            Header: 'Storenum',
            accessor: 'storenum',
           
          }, {
            Header: 'OPENDATE',
            accessor: 'OPENDATE',         
         
          },
          {
            Header: 'Date_super',
            accessor: 'date_super',
            
          },
          {
            Header: 'Conversion',
            accessor: 'conversion',
          
          },
          {
            Header: 'STREETADDR',
            accessor: 'STREETADDR',
          
          },
          {
            Header: 'STRCITY',
            accessor: 'STRCITY',
          
          } ]

        return (
            <div>
              <div className='ai_input'>
                <div>
                  <Demo/>
                </div>
                
                <Button onClick={this.graphData.bind(this,tags)} className="pull-right" color="primary"><i className="pe-7s-play"></i>Execute</Button>
                <br style={{clear: "both"}}/>
                <br style={{clear: "both"}}/>
              </div>
              {this.state.charts} 
              {/*                     
              <span style = {{'float':'right','margin':'2px'}} onClick ={this.closeGraph.bind(this)}> Close [x]</span>
                           {this.state.charts} 
              <br/> 
              */}
              <div>
                <ReactTable
                data={this.state.tableData}
                columns={tableColumns}
                defaultPageSize={3}
                showPagination={false}
                onFetchData={this.fetchData} 
                getTheadThProps={this.addList}
                className="-striped -highlight"
                />
              </div>
            </div>
        )
    }
}
