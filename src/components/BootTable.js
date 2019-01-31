import React, { Component } from "react";
import {Table} from "react-bootstrap";
import tableData from "../tableData"

class BootTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tableData: [...tableData],
            stripped: true,
            bordered: true,
            condensed: true,
            hoverRows: true
        }
    }
    render() {
        return (
            <Table striped={this.state.stripped} bordered={this.state.bordered} condensed={this.state.condensed} hover={this.state.hoverRows} >
                <thead>
                    <tr>
                        <th>#</th>
                        {Object.keys(this.state.tableData[0]).map((columnName) => <th key={columnName} >{columnName}</th> )}
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.map((row, index) => (
                        <tr key={index} >
    
                            <td>{index+1}</td>
                            {Object.keys(row).map((propName) => (
                            <td key={propName} >{row[propName]}</td>
                            ))}
                        
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
};

export default BootTable;