import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Switch } from 'antd';
import { AiOutlineMail } from 'react-icons/ai';
import { GrEdit } from 'react-icons/gr';
import { BsTelephone, BsGlobe2 } from 'react-icons/bs';
import React from 'react';

const Profile = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="profile-container">
      <div className="profile-bg">
        <img src="./bg-profile.jpg" alt="" />
        <Avatar size={50} icon={<AntDesignOutlined />} className="avatar" />
      </div>
      <div className="profile-title">
        <h3>Mitramas Infosys Global</h3>
        <h5>Layanan IT</h5>
        <div className="profile-edit">
          <GrEdit />
          <a href="#">Sunting Profile</a>
        </div>
      </div>
      <div className="profile-list">
        <div className="profile">
          <h4>Status Perusahaan</h4>
          <Switch defaultChecked onChange={onChange} />
        </div>
        <div className="profile">
          <h4>Singkatan</h4>
          <h5>MIG</h5>
        </div>
        <div className="profile">
          <h4>Alamat Perusahaan</h4>
          <h5>Jl. Tebet Raya No.42, Jakarta Selatan</h5>
        </div>
        <div className="profile">
          <h4>Penanggung Jawab (PIC)</h4>
          <h5>John Doe</h5>
        </div>
        <div className="profile">
          <h4>Tanggal PKP</h4>
          <h5>03 Maret 2021</h5>
        </div>
        <div className="profile">
          <h4>Email</h4>
          <h5 className="email">
            <AiOutlineMail className="icon" />
            <u>mig@mitrasolusi.group</u>
          </h5>
        </div>
        <div className="profile">
          <h4>No. Telp</h4>
          <h5>
            <BsTelephone className="icon" />
            021-5678-1234
          </h5>
        </div>
        <div className="profile">
          <h4>Situs Web</h4>
          <h5>
            <BsGlobe2 className="icon" />
            <u>mitramas.com</u>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Profile;
