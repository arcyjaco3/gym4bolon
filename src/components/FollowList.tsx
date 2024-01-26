import React, { useEffect, useState } from 'react';
import './styles/FollowList.css';
import { fetchUsers } from '../data/api'; // Import your API file

interface FollowListProps {}

const FollowList: React.FC<FollowListProps> = () => {
  const [users, setUsers] = useState<any[]>([]); // State to store user data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUsers();
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  // Limit the displayed users to a maximum of 5
  const displayedUsers = users.slice(0, 5);

  return (
    <div className="follow-list">
      <div className="header-follow-list">
        <h2>Who to follow</h2>
      </div>
      <div className="list">
        {displayedUsers.map((user) => (
          <div className="single-row" key={user.id}>
            <div className="avatar-name">
              <img src={user.avatar} alt={`${user.name}'s avatar`} />
              <span className="name">{user.name}</span>
            </div>
            <span className="add-friend-button">Add Friend</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowList;
