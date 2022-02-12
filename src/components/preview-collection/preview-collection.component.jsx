import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const PreviewCollection = ({ title, items, routeName }) => (
  <div className="preview-collection">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((i, idx) => idx < 4)
        .map((item) => (
          <CollectionItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
