import React from "react";
import "./Users.css";

const Users = props => {
    return (
        <div className="cardContainer">
            {props.userList.map(user => {
                return (
                    <div className="card">
                        <h2>{user.name}</h2>
                        <h3>{user.email}</h3>
                        <h3>{user.role}</h3>
                    </div>
                )
            })}

        </div>
    )
}

export default Users;