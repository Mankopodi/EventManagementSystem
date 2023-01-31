import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

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
        <div className="app">

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th ><h1>User Name</h1></th>
                            <th> Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {user?.map((user) => (
                        <tr key={user.id}>
                            <td  style={{color:'black'}}>{user.username} </td>
                            <td  style={{color:'black'}}>{user.email} </td>
                            <td  style={{color:'black'}}><button class="btn btn-warning">Suspend</button></td>
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




// useEffect(() => {
//   // update update the list of todos
//   // when the component is rendered for the first time
//   update();
// }, []);

// // This function updates the component with the
// // current todo data stored in the server
// function update() {
//   fetch(`http://localhost:1337/api/customize-events-packages`)
//     .then(res => res.json())
//     .then(customizeEventsPackage => {
//       setCustomizeEventsPackages(customizeEventsPackage.data);
//     })
// }

// This function sends a new todo to the server
// and then call the update method to update the
// component


// function addTodo(e) {
//   e.preventDefault();
//   let event_package = newCustomizeEventsPackage;
//   let body = {
//     data: {
//       event_package
//     }
//   };

//   fetch(`http://localhost:1337/api/customize-events-packages`, {
//     method: "POST",
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(body)
//   })
//     .then(() => {
//       setNewCustomizeEventsPackage("");
//       update();
//     })
// }

{/* we centered the "main" tag in our style sheet*/ }

{/* This form collects the item we want to add to our todo, and sends it to the server */ }
{/* <form className="form" onSubmit={addTodo}>
            <input type="text" className="todo_input" placeholder=" Enter Custom Event Package" value={newCustomizeEventsPackage} onChange={e => setNewCustomizeEventsPackage(e.currentTarget.value) }/>
            <button type="submit" className="todo_button btn btn-accent">Add todo</button>
          </form> */}

{/* This is a list view of all the todos in the "todo" state variable */ }
{/* <div className='all_packages'> */ }
{/* {
              customizeEventsPackages.map((customizeEventsPackage, i) => {
                return <TodoItem customizeEventsPackage={customizeEventsPackage} key={i} update={update} />
              })
            } */}
{/* </div> */ }