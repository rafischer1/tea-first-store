import React from "react";
import { connect } from "react-redux";
import "./collection.styles.scss";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { CartItem } from "../../redux/cart/cart.interface";
import { ShopCollection } from "../../redux/shop/shop.interface";

type Props = {
  collections: ShopCollection[];
};

// TODO:: type the element return that includes connect
const Collection = ({ collections }: Props) => {
  // TODO:: INVESTIGATE IF THIS IS BROKEN
  let key: any = "";
  let { collectionId } = useParams();
  if (collectionId) {
    key = collectionId;
    const collection = collections.find(
      (c) => c.title.toLowerCase() === key.toLowerCase()
    );
    if (collection) {
      return (
        <div className="collection">
          <div className="title">{collection.title}</div>
          <div className="items">
            {collection.items.map((item: CartItem) => (
              <CollectionItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      );
    } else {
      return <div>404: Items Not Found</div>;
    }
  } else {
    return <div>404: Items Not Found</div>;
  }
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

// @ts-ignore
export default connect(mapStateToProps)(Collection);
