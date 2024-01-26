import React, { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';

const App: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <Flex wrap="wrap" gap="small" className="site-button-ghost-wrapper">
    
      <Flex gap="small" wrap="wrap" className='upload-button'>
        <Button className='upload-button' type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
          Post
        </Button>
      
      </Flex>
    </Flex>
  );
};

export default App;