import React from 'react';
// import './Tables.css';


const TableHeader = (props) => (
    <thead>
        <tr>
            <th>Exchange</th>
            <th>Pair</th>
            <th>Last</th>
            <th>Bid</th>
            <th>Ask</th>
            <th>Time</th>
        </tr>
    </thead>
);


const TableRow = ({ row }) => (
    <tr>
        {
            Object.values(row).map((field, i) => (
                <td key={`${field}${i}`}>{field}</td>
            ))
        }
    </tr>
);

const TableBody = ({ rows }) => (
    <tbody>{rows.map(row => (
        <TableRow row={row} />
    ))}</tbody>
);


const TableLive = ({ rows }) => (
    <table className="table">
        <TableHeader />
        <TableBody rows={rows} />
    </table>
)

export default TableLive;