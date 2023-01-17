import React from 'react'
import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import '../../App.css';

function Packages() {
  const [EventsPackages, setEventsPackages] = useState([]);
  const [newEventsPackage, setNewEventsPackage] = useState("");

  useEffect(() => {
    // update update the list of todos
    // when the component is rendered for the first time
    update();
  }, []);

  // This function updates the component with the
  // current todo data stored in the server
  function update() {
    fetch(`http://localhost:1337/api/events-packages`)
      .then(res => res.json())
      .then(EventsPackage => {
        setEventsPackages(EventsPackage.data);
      })
  }

  // This function sends a new todo to the server
  // and then call the update method to update the
  // component
  function addEventsPackage(e) {
    e.preventDefault();
    let eventpackage = newEventsPackage;
    let Details = newEventsPackage;

    let body = {
      data: {
        eventpackage,
        Details
      }
    };
 
    fetch(`http://localhost:1337/api/events-packages`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(() => {
        setNewEventsPackage("");
        update();
      })
  }

  return (
    <div className="app">
      <main>
        {/* we centered the "main" tag in our style sheet*/}

        {/* This form collects the item we want to add to our todo, and sends it to the server */}
        <form className="form" onSubmit={addEventsPackage}>
          <input type="text" className="todo_input" placeholder="Enter new todo" value={newEventsPackage} onChange={e => setNewEventsPackage(e.currentTarget.value) }/>
          <button type="submit" className="todo_button">Add todo</button>
        </form>

        {/* This is a list view of all the todos in the "todo" state variable */}
        <div>
          {
            EventsPackages.map((EventsPackage, i) => {
              return <TodoItem EventsPackage={EventsPackage} key={i} update={update} />
            })
          }
        </div>

      </main>
    </div>
  )
}

export default Packages
