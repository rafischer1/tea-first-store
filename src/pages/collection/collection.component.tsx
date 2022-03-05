import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { CartItem } from "../../redux/cart/cart.interface";
import { ShopCollection } from "../../redux/shop/shop.interface";
import { CollectionStyles } from "./collection.styles";

type Props = {
  collections: ShopCollection[];
};

const Collection = ({ collections }: Props) => {
  let { collectionId } = useParams();
  if (collectionId) {
    const collection = collections.find(
      (c) => c.routeName.toLowerCase() === collectionId?.toLowerCase()
    );
    if (collection) {
      return (
        <CollectionStyles.Container>
          <CollectionStyles.Title>{collection.title}</CollectionStyles.Title>
          <CollectionStyles.ItemsContainer>
            {collection.items.map((item: CartItem) => (
              <CollectionItem item={item} key={item.id} />
            ))}
          </CollectionStyles.ItemsContainer>
        </CollectionStyles.Container>
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
