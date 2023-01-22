import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { deleteUser } from "./UserSlice";

function UserList() {
    const params=useParams();
    const dispatch=useDispatch();
    const users=useSelector(store=>store.users);
 const handleDelete=(id)=>{
   dispatch((deleteUser({id:id})))
 }
  const fetchUsers = () => {
    return (
      <>
        {users.map((user) => {
          return (
            <div
              key={user.id}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "gray",
                width: "300px",
                alignItems: "center",
                borderRadius: "5px",
              }}
            >
              <h2>{user.name}</h2>
              <h3>{user.email}</h3>
              <div style={{ margin: "5px 5px", padding: "5px" }}>
                <Link to={`/edit-user/${user.id}`}>
                  <Button>Edit</Button>
                </Link>
                <Link>
                  <Button onClick={()=>handleDelete(user.id)}>Delete</Button>
                </Link>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        margin: "0 auto",
      }}
    >
      {users.length ? fetchUsers() : <h2>No Users</h2>}
    </div>
  );
}

export default UserList;
