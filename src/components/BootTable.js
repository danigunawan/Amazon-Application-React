import React from "react";
import {Table} from "react-bootstrap";

const BootTable = props => {
    // console.log(props.data);
    return (
        <Table striped={props.stripped} bordered={props.bordered} condensed={props.condensed} hover={props.hoverRows} >
            <thead>
                <tr>
                    <th>#</th>
                    {Object.keys(props.tableData[0]).map((columnName) => <th>{columnName}</th> )}
                </tr>
            </thead>
            <tbody>
                {props.tableData.map((row, index) => (
                    <tr key={index} >
                        <td>{index+1}</td>
                        {Object.keys(row).map((propName) => (
                        <td>{row[propName]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default BootTable;