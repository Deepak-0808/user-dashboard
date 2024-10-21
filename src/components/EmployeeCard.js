
import "../styles/EmployeeCard.css"

const EmployeeCard = ({profilePic, name, designation, email }) => {
    return (
      <div className="employee-card">
        <div className="left-section">
          <img
            src={profilePic}
            alt="User"
            className="user-image"
          />
        </div>
        <div className="right-section">
          <h3>{name}</h3>
          <p>{designation}</p>
          <p>{email}</p>
          <div className="card-buttons">
            <button className="block-btn">Block</button>
            <button className="details-btn">Details</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default EmployeeCard;
  