import React from 'react'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

//import "./manage.css"
import React_App_URl from '../../'
import { Token } from '../../tokens/constant';
import { ERROR, SUCCESS } from '../../enviroments/toast';
// import { Button } from 'reactstrap';
// import BlockUi from 'react-block-ui';
// import 'react-block-ui/style.css';

function ManageEvent() {
    const [user, setUser] = useState([]);
    // const [newCustomizeEventsPackage, setNewCustomizeEventsPackage] = useState("");
    const userID = useRef();

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



      const blockingUser = (user) => {
        
        userID.current = user.id;
        let newBlock = !user.blocked;
    
        const blocked = {
          blocked: newBlock,
        };

        axios
          .put(`${'localhost:1337/api/users'}/users/${userID.current}`, blocked, {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          })
          .then((user) => {
            if (newBlock) {
              SUCCESS("Blocked");
            } else {
              SUCCESS("Unblocked");
            }
          })
          .catch((error) => {
            ERROR(error.response.user.error.message);
          })
          .finally(() => {
            getUsers();
          });
      };


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
                            <td  style={{color:'black'}}><button  class="btn btn-warn" color="primary" onClick={()=> blockingUser(user)}>Suspend</button></td> 
                            <td  style={{color:'black'}}><button class="btn btn-error" onClick={()=> deleteTodo(user.id)}>Delete</button></td>
                        </tr>
                        ))}

                    </tbody>
                </table>
                
            </div>

        </div>
    )
}

export default ManageEvent



 // constructor(props) {
    //   super(props);
  
    //   this.toggleBlocking = this.toggleBlocking.bind(this);
    //   this.state = {
    //     blocking: false,
    //   };
    // }
  
    // toggleBlocking() {
    //   this.setState({blocking: !this.state.blocking});
    // }