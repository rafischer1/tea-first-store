import React, { Suspense } from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { CartItem } from "../../redux/cart/cart.interface";
import Spinner from "../spinner/spinner.component";

type PreviewCollectionProps = {
  key: number;
  title: string;
  items: CartItem[];
};

const PreviewCollection = ({ title, items }: PreviewCollectionProps) => (
  <Suspense fallback={<Spinner />}>
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
  </Suspense>
);

export default PreviewCollection;
