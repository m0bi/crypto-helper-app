import React from 'react';
import './Tables.css';
 
 
const TableDemo = () => (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Table Row Header</th>
                    <th>Table Row Header</th>
                    <th>Table Row Header</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Data</td>
                    <td>Data</td> 
                    <td>Data</td>             
                </tr>
                <tr>
                    <td>Data</td>
                    <td>Data</td> 
                    <td>Data</td>             
                </tr>
            </tbody>
        </table>
    </div>
);
 
export default TableDemo;