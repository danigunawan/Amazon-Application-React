import React from "react";

const BootTable = props => {
    // console.log(props.data);
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(row => (
                    <tr key={row.username} >
                        
                        <td>{row.firstName}</td>
                        <td>{row.lastName}</td>
                        <td>{row.username}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BootTable;