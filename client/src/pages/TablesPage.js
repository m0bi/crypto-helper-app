import React, { Component } from 'react';
import TableLive from "../components/Tables/TableLive";
import { TablesContainer } from '../components/TablesContainer/TablesContainer.js';
// import { TableLive } from '../components/Tables/TableLive.js';
// import { TableBooks } from '../components/Tables/TableBooks.js';
import data from "./data";
import API from "../utils/API";
 
class TablesPage extends Component {

    state = {
        live: []
    }

    componentDidMount() {
        
            API.getLiveData().then((res)=>{
                let live = res.data;
                this.setState({
                    live
                });
            });
             
    }
    
  render() {
    return (
        <TablesContainer live={this.state.live} />        
    );
  }
}
 
export default TablesPage