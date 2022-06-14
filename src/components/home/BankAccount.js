import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Visa } from '@icons-pack/react-simple-icons';
const BankAccount = () => {
  return (
    <div className="bank-account-container">
      <div className="bank-account-header">
        <h3>Akun Bank</h3>
        <button>
          <PlusOutlined /> Tambah Akun Bank
        </button>
      </div>
      <div className="bank-account-list">
        <div className="bank-account">
          <div className="logo">
            <Visa className="visa" />
          </div>
          <div className="bank-info">
            <div className="bank-title">
              <h4>Bank KB Bukopin</h4>
              <div className="bank-icon">
                <AiOutlineEdit className="icon" />
                <AiOutlineDelete className="icon" />
              </div>
            </div>
            <div className="bank-desc">
              <h4>**** 0876 - Yusron Taufiq</h4>
              <h4>IDR</h4>
            </div>
          </div>
        </div>
        <div className="bank-account">
          <div className="logo">
            <Visa className="visa" />
          </div>
          <div className="bank-info">
            <div className="bank-title">
              <h4>Citibank, NA</h4>
              <div className="bank-icon">
                <AiOutlineEdit className="icon" />
                <AiOutlineDelete className="icon" />
              </div>
            </div>
            <div className="bank-desc">
              <h4>**** 5525 - Si Tampan</h4>
              <h4>USD</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccount;
