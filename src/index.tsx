import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import "./index.scss";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { ColorProvider } from "./contexts/color.context";
import { ProductsProvider } from "./contexts/products.context";

// Persistor is persisting RootState in localstorage

const container = document.getElementById("app");
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <ColorProvider>
            <UserProvider>
              <ProductsProvider>
                <App />
              </ProductsProvider>
            </UserProvider>
          </ColorProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}
