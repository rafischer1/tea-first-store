import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import Spinner from "../../components/spinner/spinner.component";

// TODO: investigate this ith v6 Nested Routes
const Shop = () => {
  let { pathname } = useLocation();
  return (
    <Suspense fallback={<Spinner />}>
      <div className="shop-page">
        {pathname.split("/").length > 2 ? (
          <Outlet />
        ) : (
          <CollectionsOverview collections={[]} />
        )}
      </div>
    </Suspense>
  );
};

export default Shop;
