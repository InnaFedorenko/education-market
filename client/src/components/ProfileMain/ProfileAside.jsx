import React, { useState } from 'react';
import avatarPath from "/images/verse/avatar.png";

const ProfileAside = ({initialProfile}) => {
 // Initial profile information
  // const initialProfile = {
  //   username: 'JohnDoe',
  //   email: 'johndoe@example.com',
  //   profilePicture: avatarPath,
  // };

  // State to manage profile information and edit mode
  const [profile, setProfile] = useState(initialProfile);
  const [editMode, setEditMode] = useState(false);

  // Event handler for editing profile information
  const handleEdit = () => {
    setEditMode(!editMode);
  };

  // Event handler for saving edited profile information
  const handleSave = () => {
    // Update the profile information in the state (you can add form validation here)
    setProfile(profile);
    setEditMode(false);
  };

  // Event handler for canceling the edit
  const handleCancel = () => {
    // Reset the profile information to its initial state
    setProfile(initialProfile);
    setEditMode(false);
  };

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <aside>
      <div className="profile-picture">
        <img src={profile.profilePicture} alt="Profile" />
      </div>
      {editMode ? (
        <div className="edit-profile">
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div className="profile-info">
          <h2>{profile.username}</h2>
          <p>{profile.email}</p>
        </div>
      )}
      <button onClick={handleEdit}>
        {editMode ? 'Cancel' : 'Edit Profile'}
      </button>
    </aside>
  );
};

export default ProfileAside;
