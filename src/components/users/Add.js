import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Add = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
  const [phone, setPhone] = useState('');
  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = { name, username, website, phone };
    await fetch('http://localhost:5000/users', {
      method: 'Post',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
    history.push('/page2');
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
      <button onClick={onSubmit}>Save</button>
    </div>
  );
};

export default Add;
