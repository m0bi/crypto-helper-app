import React, { Component } from 'react';
import TableDemo from "../components/Tables/Tables";
// import { TablesContainer } from '../components/TablesContainer/TablesContainer.js';
// import { TableLive } from '../components/Tables/TableLive.js';
// import { TableBooks } from '../components/Tables/TableBooks.js';

import API from "../utils/API";
 
class TablesPage extends Component {

    state = {
        books: []
    }

    // componentDidMount() {
        
    //         API.getBooksData().then((res)=>{
    //             let books = res.data;
    //             this.setState({
    //                 books
    //             });
    //         });
             
    // }
    
  render() {
    return (
        <TableDemo />       
    );
  }
}
 
export default TablesPage