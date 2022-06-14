import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';

const Page2 = () => {
  const [tangkep, setTangkep] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`http://localhost:5000/users`);
    const data = await response.json();
    setTangkep(data);
  };

  const deleteUsers = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    fetchUsers();
    handleCancel();
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="table">
      <button className="new-button">
        <Link to="/adduser" className="button">
          Create New
        </Link>
      </button>
      <table className="data">
        <thead>
          <tr>
            <th>
              <h1>Name</h1>
            </th>
            <th>
              <h1>Username</h1>
            </th>
            <th>
              <h1>Website</h1>
            </th>
            <th>
              <h1>Phone</h1>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tangkep.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.website}</td>
                <td>{data.phone}</td>
                <td>
                  <button className="edit-button">
                    <Link to={`/updateuser/${data.id}`} className="button">
                      Edit
                    </Link>
                  </button>
                  <button className="button delete-button" onClick={showModal}>
                    Delete
                  </button>
                  <Modal title="Delete User" visible={isModalVisible} onOk={() => deleteUsers(data.id)} onCancel={handleCancel}>
                    <h2>Are You Sure Delete This User? </h2>
                  </Modal>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Page2;
