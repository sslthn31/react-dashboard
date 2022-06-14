import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Modal } from 'antd';

const Update = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
  const [phone, setPhone] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getUsersId();
  });

  const getUsersId = async () => {
    const response = await fetch(`http://localhost:5000/users/${id}`);
    const data = await response.json();
    setName(data.name);
    setUsername(data.username);
    setWebsite(data.website);
    setPhone(data.phone);
  };

  const updateUser = async (event) => {
    event.preventDefault();
    const data = { name, username, website, phone };
    await fetch(`http://localhost:5000/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
    history.push('/page2');
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <p>Name</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Username</p>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <p>Website</p>
      <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
      <p>phone</p>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={showModal}>Update</button>
      <Modal title="Update User" visible={isModalVisible} onOk={updateUser} onCancel={handleCancel}>
        <h2>Are You Sure Update This User? </h2>
      </Modal>
    </div>
  );
};

export default Update;
