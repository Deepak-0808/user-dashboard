import React from 'react';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import EmployeeFilter from './EmployeeFilter';
import EmployeeCard from './EmployeeCard';
import "../styles/Dashboard.css"
import myImage from '../assets/Deepak.jpg';

const Dashboard = () => {
    const loggedInUser = "Deepak Kumar";

  return (
    <div className="dashboard">
      <div className="top-bar">
        <SearchBar />
        <UserProfile userName={loggedInUser} />
      </div>
      <div className="employees-header">
        <h1>Employees</h1>
        <EmployeeFilter />
      </div>
      <div className="employee-cards" >
        {/* Sample employee data */}
        <EmployeeCard profilePic={myImage} name="John Doe" designation="Software Engineer" email="john.doe@example.com" />
        <EmployeeCard profilePic={myImage} name="Jane Smith" designation="Project Manager" email="jane.smith@example.com" />
        <EmployeeCard profilePic={myImage} name="Alice Brown" designation="HR Specialist" email="alice.brown@example.com" />
        <EmployeeCard profilePic={myImage} name="Alice Brown" designation="HR Specialist" email="alice.brown@example.com" />
        <EmployeeCard profilePic={myImage} name="John Doe" designation="Software Engineer" email="john.doe@example.com" />
        <EmployeeCard profilePic={myImage} name="Jane Smith" designation="Project Manager" email="jane.smith@example.com" />
        <EmployeeCard profilePic={myImage} name="Alice Brown" designation="HR Specialist" email="alice.brown@example.com" />
        <EmployeeCard profilePic={myImage} name="Alice Brown" designation="HR Specialist" email="alice.brown@example.com" />
      </div>
    </div>
  );
};

export default Dashboard;
