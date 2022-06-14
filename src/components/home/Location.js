import React from 'react';
import { TbTool, TbBuildingCommunity, TbBuildingWarehouse } from 'react-icons/tb';
const Location = () => {
  return (
    <div className="location-container">
      <div className="location-header">
        <h4>Lokasi</h4>
        <a href="#">Lihat Semua</a>
      </div>
      <div className="location-list">
        <div className="location">
          <TbBuildingCommunity className="location-icon" />
          <div className="location-desc">
            <h3>20</h3>
            <h5>induk</h5>
          </div>
        </div>
        <div className="location">
          <TbTool className="location-icon" />
          <div className="location-desc">
            <h3>3</h3>
            <h5>Sub Lokasi Level 1</h5>
          </div>
        </div>
        <div className="location">
          <TbBuildingWarehouse className="location-icon" />
          <div className="location-desc">
            <h3>1</h3>
            <h5>Sub Lokasi Level 2</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
