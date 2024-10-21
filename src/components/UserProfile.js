import React from 'react';
import myImage from '../assets/Deepak.jpg';
import "../styles/UserProfile.css"

const UserProfile = ({ userName }) => {
  return (
    <div className="user-profile">
      <img
        src={myImage}
        alt="User"
        className="profile-pic"
      />
      <span className="user-name">{userName}</span>
      <span className="dropdown-icon">▼</span> 
    </div>
  );
};

export default UserProfile;

