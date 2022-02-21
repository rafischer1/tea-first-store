import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { CartItem } from "../../redux/cart/cart.interface";

type PreviewCollectionProps = {
  key: number;
  title: string;
  items: CartItem[];
};

const PreviewCollection = ({ title, items }: PreviewCollectionProps) => (
  <div className="preview-collection">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((_i, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
