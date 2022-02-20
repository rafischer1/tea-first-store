import React from "react";
import { connect } from "react-redux";
import "./collection.styles.scss";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

const Collection = ({ collections }) => {
  let { collectionId } = useParams();
  const collection = collections[collectionId];
  if (collection) {
    return (
      <div className="collection">
        <div className="title">{collection.title}</div>
        <div className="items">
          {collection.items.map((item) => (
            <CollectionItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div>404: Items Not Found</div>;
  }
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(Collection);
