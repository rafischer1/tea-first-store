import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { UserProvider } from "./contexts/user.context";
import "./index.scss";
import App from "./App";
import { ColorProvider } from "./contexts/color.context";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <ColorProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ColorProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
