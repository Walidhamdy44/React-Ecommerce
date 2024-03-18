import React from "react";
import { Button } from "react-bootstrap";

const UserProfile = () => {
  return (
    <div className="profile">
      <div className="info">
        <span>
          Name: <span>Walid Hamdy</span>
        </span>
        <span>
          Phone: <span>0113768386 </span>
        </span>
        <span>
          Email: <span>WalidHamdy@gmail.com</span>
        </span>
      </div>
      <div className="new-brand">
        <h4 className="p-2">Change Password</h4>
        <input type="text" placeholder="Old Password" />
        <input type="text" placeholder="New Password" />
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default UserProfile;
