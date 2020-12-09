import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ProductSearch } from "./components/ProductSearch";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { ProductPage } from "./components/ProductPage";

function renderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <header>
            <Link to="/">Home</Link> <Link to="/checkout">Checkout</Link>
          </header>
          <Switch>
            <Route exact path="/product/:id" children={<ProductPage />} />
            <Route exact path="/" children={<ProductSearch />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

renderApp();
store.subscribe(renderApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
