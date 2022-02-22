import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import PreviewCollection from "../preview-collection/preview-collection.component";
import { ShopCollection } from "../../redux/shop/shop.interface";

type CollectionsProps = {
  collections: ShopCollection[];
};

//TODO::inspect the use of collection from the hashMap type
const CollectionsOverview = ({ collections }: CollectionsProps) => (
  <div className="collections-overview">
    {collections.map((collection: ShopCollection) => (
      <PreviewCollection
        key={collection.id}
        title={collection.title}
        items={collection.items}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

const connector = connect(mapStateToProps, null);

export default connector(CollectionsOverview);
