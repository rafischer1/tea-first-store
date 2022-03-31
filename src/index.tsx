import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import "./index.scss";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { ColorProvider } from "./contexts/color.context";
import { ProductsProvider } from "./contexts/products.context";

ReactDOM.render(
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
  </Provider>,
  document.getElementById("root")
);
