import React, { useEffect, useState } from 'react';
import './styles/PostList.css';
import PostComment from './PostComment';
import PostComments from './PostComments';

import { fetchUsers } from '../data/api'; // Import your API file

interface PostListProps {}

const PostList: React.FC<PostListProps> = () => {
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

  return (
    <div className="post-list">
      {users.map((user) => (
        <div className="single-post" key={user.id}>
          <div className="personal-header">
            <div className="post-info">
              <p>{user.name}</p>
              {/* Additional user information can be displayed here */}
            </div>
          </div>
          {/* Other post content goes here */}
          <PostComments />
          <PostComment />
        </div>
      ))}
    </div>
  );
};

export default PostList;
