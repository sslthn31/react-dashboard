import React from 'react';
import {AiOutlineShareAlt} from 'react-icons/ai';

const Relation = () => {
  return (
    <div className="relation-container">
      <div className="relation-header">
        <h3>Relasi</h3>
        <a href="#"> Lihat Semua</a>
      </div>
      <div className="relation-list">
        <div className="relation">
          <AiOutlineShareAlt className='icon'/>
          <div className="relation-desc">
            <h3>20</h3>
            <p>Memiliki</p>
          </div>
        </div>
        <div className="relation">
          <AiOutlineShareAlt className='icon' />
          <div className="relation-desc">
            <h3>108</h3>
            <p>Memiliki</p>
          </div>
        </div>
        <div className="relation">
          <AiOutlineShareAlt className='icon'/>
          <div className="relation-desc">
            <h3>67</h3>
            <p>Memiliki</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Relation;
