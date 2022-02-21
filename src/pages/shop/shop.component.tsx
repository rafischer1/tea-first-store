import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

// TODO: investigate this ith v6 Nested Routes
const Shop = () => {
  let { pathname } = useLocation();
  return (
    <div className="shop-page">
      {pathname.split("/").length > 2 ? (
        <Outlet />
      ) : (
        <CollectionsOverview collections={[]} />
      )}
    </div>
  );
};

export default Shop;
