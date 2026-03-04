// import React, {useState} from 'react';

// function App(){

//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1> Counter: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default App;
import axios from 'axios';
import React, {useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fetch Users
  const fetcUsers= () => {
    // fetch("http://localhost:5000/users")
    // .then((res) => res.json())
    // .then((data) => setUsers(data))
    axios.get("http://localhost:5000/users")
    .then((res) => setUsers(res.data))
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetcUsers();
  }, []);

// Create User
// const createUser = () => {
//   fetch("http://localhost:5000/create-user", {
//     method: "POST",
//     headers : {
//       "Content-Type" : "application/json",
//     },
//     body: JSON.stringify({name, email, password}),
//     // This converts a JavaScript object into JSON string.
//   })
//   .then((res) => res.json())
//   .then(() => {
//     setName("");
//     setEmail("");
//     setPassword("");
//     fetcUsers();
//   });
// };
const createUser = () => {
  axios.post("http://localhost:5000/create-user", {
    name, email, password
  }) .then(() => {
    setName("");
    setEmail("");
    setPassword("");
    fetchUsers();
  }).catch((err) => console.log(err));
};

// const deleteUser = (id) => {
//   fetch(`http://localhost:5000/delete-user/${id}` , {
//     method: "DELETE",
//   }).then(() => fetcUsers());
// };
const deleteUser = (id) => {
  axios.delete(`http://localhost:5000/delete-user/${id}`)
  .then(() => fetchUsers())
  .catch((err) => console.log(err));
};

return (
  <div style= {{padding: "30px"}}>
    
  <h2>Create User</h2>
  <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
  <input placeholder='Email' value={email} onChange= {(e) => setEmail(e.target.value)} />
  <input placeholder='Password' value={password} onChange= {(e) => setPassword(e.target.value)} />
  <button onClick={createUser}>Add User</button>

    <h2>Users List</h2>
    {users.map((user) => (
      <div key={user._id}>
          <p>
            {user.name} - {user.email} <button onClick={() => deleteUser(user._id)}>Delete</button>
          </p>
          
        </div>
    ))}
  </div>
)

}

export default App;