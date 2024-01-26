import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import  '../assets/styles/Profile.css';
import { Tabs } from 'antd';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div>
      <Header />

      <div className='profile-container'>
        <div className='column-one'>
          <h2>Personal Info</h2>
          <ul>
            {user ? (
              <>
                <li>
                  <h3>Name</h3>
                  <span>{user.name}</span>
                </li>
                
                <li>
                  <h3>Email</h3>
                  <span>{user.email}</span>
                </li>
                <li>
                  <h3>Phone</h3>
                  <span>{user.phone}</span>
                </li>
                <li>
                  <h3>Website</h3>
                  <span>{user.website}</span>
                </li>
                <li>
                  <h3>Address</h3>
                  <span>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</span>
                </li>
                <li>
                  <h3>Company</h3>
                  <span>{`${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`}</span>
                </li>
              </>
            ) : (
              <p>Loading user data...</p>
            )}
          </ul>
        </div>

        <div className='column-two'>
          <Tabs
            defaultActiveKey="1"
            centered
            items={new Array(3).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: `Tab ${id}`,
                key: id,
                children: `Content of Tab Pane ${id}`,
              };
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
