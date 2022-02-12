import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${linkUrl}`);
  };

  return (
    <div className={`menu-item ${size}`} onClick={handleClick}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl}` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
