import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./manage.css"

function ManageEvent() {
    const [user, setUser] = useState([]);
    // const [newCustomizeEventsPackage, setNewCustomizeEventsPackage] = useState("");

    useEffect(() => {
       getUsers();
    }, []);

    function getUsers() {
        fetch(`http://localhost:1337/api/users`)
          .then(res => res.json())
          .then(user => {
            setUser(user);
            console.log(user)
          })
      }


    function deleteTodo(id) {
        // console.log(pos, 'id: ');
        console.log( 'getting user: ', id)
     
        axios.delete(`http://localhost:1337/api/users/${id}`)
          .then((res) => {
            console.log(res);
            getUsers();
          })
          console.log( 'getting user: ', id)
      }


    return (
        <div className='container' >

            <div className="manageEVent overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th  style={{color:'white'}}>User Name</th>
                            <th style={{color:'white'}}> Email</th>
                            <th style={{color:'white'}}> Block</th>
                            <th style={{color:'white'}}> Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {user?.map((user) => (
                        <tr key={user.id}>
                            <td  style={{color:'black'}}>{user.username} </td>
                            <td  style={{color:'black'}}>{user.email} </td>
                            <td  style={{color:'black'}}><button class="btn btn-warning">Suspend</button></td> 
                            <td  style={{color:'black'}}><button class="btn btn-error" style={{color:'black'}} onClick={()=> deleteTodo(user.id)}>Delete</button></td>
                        </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ManageEvent


