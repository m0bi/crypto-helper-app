import React, { Component } from "react";
import Table1 from "../components/Table/Table";

import API from "../utils/API";

var data = [
    {id: 1, name: 'Gob', value: '2'},
    {id: 2, name: 'Buster', value: '5'},
    {id: 3, name: 'George Michael', value: '4'}
];

class TablesPage extends Component {
    render() {
      return (
        <div className="Table">
          <p className="Table-header">Basic Table</p>
          <Table1 data={data}/>
        </div>
      );
    }
  }
   
  export default TablesPage;