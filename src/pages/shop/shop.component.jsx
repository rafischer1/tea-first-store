import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

const Shop = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...collectionProps }) => (
        <PreviewCollection key={id} {...collectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(Shop);
