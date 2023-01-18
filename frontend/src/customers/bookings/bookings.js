import {Fragment} from "react";
import {Button, Table} from 'react-bootstrap';
//import "bootstrap/dist/css/bootstrap.min.css";
import {Events} from '../bookings/events';
import {Link, useNavigate } from 'react-router-dom';


function Bookings() {

  //delete function
  let history = useNavigate();

  const handleDelete = (id) => {
      var index = Events.map(function (e) {
          return e.id
      });
      Events.splice(index, 1); // will delete at that particular index

      history('/');

  }

  return (
    <div className="min-h-screen color" >
        <Fragment>
          <div style={{ margin: "1-rem" }}>
          <div className="overflow-x-auto">
        <h2 className="heading text-center text-5xl mb-8 mt-4" style={{color: 'white'}}>Manage Events</h2>
      </div>
          <Link className=" cre" to={"/create"}>
              <Button size='sm' >Create</Button>
            </Link>
            <Table className="mt-4" striped bordered hover size='sm'>
              <thead>
                <tr>
                  <th>Venue</th>
                  <th>Event Name</th>
                  <th>Date</th>
                  <th>location</th>
                  <th>Total Number of Guests</th>
                  <th>Event Status</th>
                  <th>Review</th>
                </tr>
              </thead>

              <tbody>
                {
                  Events && Events.length > 0
                    ?
                    Events.map((item) => {
                      return (
                        <tr>
                          <td>
                            {item.Venue}
                          </td>
                          <td>
                            {item.EventName}
                          </td>
                          <td>
                            {item.Date}
                          </td>
                          <td>
                            {item.Location}
                          </td>
                          <td>
                            {item.TotalNumberOfGuests}
                          </td>
                          <td>
                            {item.StatusOfEvent}
                          </td>
                          <td>
                            <Link to={`edit`}>
                              <Button onClick={() => alert(item.id, item.Venue, item.EventName, item.Date, item.Location, item.TotalNumberOfGuests, item.StatusOfEvent)} >Edit</Button>
                            </Link>
                            &nbsp;
                            <Button onClick={() => handleDelete(item.id)} >DELETE</Button>
                          </td>

                        </tr>
                      )

                    })
                    :
                    "No data available"
                }
              </tbody>
            </Table>
            <br>
            </br>

            
          </div>
        </Fragment>
        </div>

     

  );
}

export default Bookings;
