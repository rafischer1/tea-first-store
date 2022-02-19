import React from "react";
import "./category.styles.scss";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item.component";

const Category = () => {
  let { categoryId } = useParams();
  return (
    <div className="category">
      <h2>{categoryId.toUpperCase()}</h2>
    </div>
  );
};

export default Category;
