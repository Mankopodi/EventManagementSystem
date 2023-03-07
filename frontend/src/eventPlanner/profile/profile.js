// import React, { useState, useEffect } from 'react';
// import "../profile";
// import axios from "axios";
// import Sidebar from '../../components/SideBar/Sidebar'
// import TopNav from "../../components/TopNav/TopNav"

//  const Profile = (props) => {
//   const [users, setUser] = useState({});
//   const [loader, setLoader] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         // Make a GET request to the Strapi backend
//         const response = await axios.get(`process.env.React_App_URl/api/users-details`);
//         setLoader(true);
//         setUser(response.data.data);
//         console.log(users)
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchData();
//   }, []);

//   return (

//     <div>
//       <Sidebar />
//       <div className="main__layout">
//         <TopNav />

//         <div className="content">
//           <div className="settings">
//             <div className="settings__wrapper">
//               <h2 className="settings__title">Profile</h2>

//               <div className="settings__top">
//                 <button className="setting__btn">My Details</button>
//                 <button className="setting__btn active__btn w">Profile</button>
//                 <button className="setting__btn">Password</button>

//               </div>

//               <div className="details__form">
//                 <h2 className="profile__title">Profile</h2>
//                 <p className="profile__desc">
//                   Update your photo and personal details here
//                 </p>
//                 {loader && users.map(user => (
//                 <form key={user}>
//                   <div className="form__group">
//                     <div>
//                       <label>First Name</label>
//                       <input type="text" placeholder={user.attributes.first_name} />
//                     </div>

//                     <div>
//                       <label>Last Name</label>
//                       <input type="text" placeholder={user.attributes.last_name} />
//                     </div>
//                   </div>

//                   <div className="form__group">
//                     <div>
//                       <label>Email</label>
//                       <input type="email" placeholder={user.attributes.email} />
//                     </div>

//                     <div>
//                       <label>Phone Number</label>
//                       <input type="number" placeholder={user.attributes.phone} />
//                     </div>
//                   </div>

//                   <div className="form__group">
                    

//                     <div>
//                       <label>Gender</label>
//                       <input type="text" placeholder={user.attributes.gender} />
//                     </div>
//                   </div>

//                   <div className="form__group">
//                     <div>
//                       <label>Your Photo</label>
//                       <p className="profile-img__desc">
//                         This will be displayed in your profile
//                       </p>
//                       <input type="file" placeholder="choose file" />
//                     </div>

//                     <div className="profile__img-btns">
//                       <button type="submit" className="update__btn">Update</button>
//                     </div>
//                   </div>
//                 </form>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//       );
// };

//       export default Profile;

import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>

              <h1 className="text-3xl font-semibold text-center text-black ">
          Profile
        </h1>

            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
           
                <div className="d-flex justify-content-center mb-2">

                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                  </MDBListGroupItem>
    
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">matome</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                   
                   
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    
                  
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>
                    
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}






