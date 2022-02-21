import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.styles.scss";
import { DirectorySection } from "../../redux/directory/directory.interface";

type MenuItemProps = {
  item: DirectorySection;
  subtitle: string;
};

const MenuItem = ({ item, subtitle }: MenuItemProps) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${item.linkUrl}`);
  };

  return (
    <div className={`menu-item ${item.size}`} onClick={handleClick}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${item.imageUrl}` }}
      />
      <div className="content">
        <h1 className="title">{item.title.toUpperCase()}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export default MenuItem;
