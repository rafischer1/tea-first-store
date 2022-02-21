import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import PreviewCollection from "../preview-collection/preview-collection.component";
import { ShopCollection } from "../../redux/shop/shop.interface";

type CollectionsProps = {
  collections: ShopCollection[];
};

//TODO::inspect the use of collection from the hashMap type
const CollectionsOverview = ({ collections }: CollectionsProps) => (
  <div className="collections-overview">
    {collections.map((shop: ShopCollection) => (
      <PreviewCollection
        key={shop.collection.id}
        title={shop.collection.title}
        items={shop.collection.items}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

const connector = connect(mapStateToProps, null);

export default connector(CollectionsOverview);
