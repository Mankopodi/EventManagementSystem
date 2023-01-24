import React from 'react'
import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import '../../customers/packages/packages.css';

function Packages() {
  const [customizeEventsPackages, setCustomizeEventsPackages] = useState([]);
  const [newCustomizeEventsPackage, setNewCustomizeEventsPackage] = useState("");

  useEffect(() => {
    // update update the list of todos
    // when the component is rendered for the first time
    update();
  }, []);

  // This function updates the component with the
  // current todo data stored in the server
  function update() {
    fetch(`http://localhost:1337/api/customize-events-packages`)
      .then(res => res.json())
      .then(customizeEventsPackage => {
        setCustomizeEventsPackages(customizeEventsPackage.data);
      })
  }

  // This function sends a new todo to the server
  // and then call the update method to update the
  // component
  function addTodo(e) {
    e.preventDefault();
    let event_package = newCustomizeEventsPackage;
    let body = {
      data: {
        event_package
      }
    };
 
    fetch(`http://localhost:1337/api/customize-events-packages`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(() => {
        setNewCustomizeEventsPackage("");
        update();
      })
  }

  return (
    <div className="app">
      <main>
        {/* we centered the "main" tag in our style sheet*/}

        {/* This form collects the item we want to add to our todo, and sends it to the server */}
        <form className="form" onSubmit={addTodo}>
          <input type="text" className="todo_input" placeholder="Enter new todo" value={newCustomizeEventsPackage} onChange={e => setNewCustomizeEventsPackage(e.currentTarget.value) }/>
          <button type="submit" className="todo_button btn btn-success">Add todo</button>
        </form>

        {/* This is a list view of all the todos in the "todo" state variable */}
        <div className='all_packages'>
          {
            customizeEventsPackages.map((customizeEventsPackage, i) => {
              return <TodoItem customizeEventsPackage={customizeEventsPackage} key={i} update={update} />
            })
          }
        </div>

      </main>
    </div>
  )
}

export default Packages
