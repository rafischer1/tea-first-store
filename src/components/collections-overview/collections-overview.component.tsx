import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import PreviewCollection from "../preview-collection/preview-collection.component";
import { ShopCollection } from "../../redux/shop/shop.interface";
// import { ProductsContext } from "../../contexts/products.context";

type CollectionsProps = {
  collections: ShopCollection[];
};

const CollectionsOverview = ({ collections }: CollectionsProps) => (
  <div className="collections-overview" role="props">
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

// ALTERNATELY BY USING CONTEXT vs REDUX
// const CollectionsOverview = () => (
//   const {products} = useContext(ProductsContext)
//   <div className="collections-overview">
//     {products.map((collection: ShopCollection) => (
//       <PreviewCollection
//         key={collection.id}
//         title={collection.title}
//         items={collection.items}
//       />
//     ))}
//   </div>
// );
