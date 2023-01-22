import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Button from './components/Button';
import AddUser from './Features/users/AddUser';
import EditUser from './Features/users/EditUser';
import UserList from './Features/users/UserList';


function App() {
  return (
    <div className="App" style={{display:'flex',flexDirection:'column',justifyContent:"space-around",marginTop:"100px"}}>
      <h1 className='heading' style={{margin:"0 auto"}}>Redux Toolkit</h1>
      <div style={{marginLeft:"250px"}}>
      <Link to="/add-user"><Button>Add User</Button></Link>

      <Routes>

        <Route path="/" element={<UserList />}></Route>
        <Route path="/add-user" element={<AddUser />}></Route>
        <Route path="/edit-user/:id" element={<EditUser />}></Route>

      </Routes>
      </div>
    </div>
  );
}

export default App;
