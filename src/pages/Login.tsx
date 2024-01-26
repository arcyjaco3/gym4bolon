import React, { useEffect, useState } from 'react';
import '../assets/styles/Login.css';
import Header from '../components/Header';

import { UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  username: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const onFinish = (values: any) => {
    const user = users.find(user => user.username === values.username);

    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } else {
      console.error('User not found');
    }
  };

  return (
    <>
    <Header />
    <div className="login-container">
      
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
    </div>
    </>
 );
};

export default App;
