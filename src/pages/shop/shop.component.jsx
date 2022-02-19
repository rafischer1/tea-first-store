import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const Shop = () => {
  let path = useLocation();
  console.log(path);
  return (
    <div className="shop-page">
      <CollectionsOverview />
      <Routes>
        <Route path={`${path}`} component={CollectionsOverview} />
      </Routes>
    </div>
  );
};

export default Shop;
