import React, { useState } from 'react';
import './App.css';
import Users from "./components/Users";
import Form from "./components/Form";

import userData from "./data";


function App() {

  const [users, setUsers] = useState(userData);

  const addNewUser = user => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
    <h1>Team Members!</h1>
    <Form addNewUser={addNewUser} />
    <Users userList={users}/>
      
    </div>
  );
}

export default App;
