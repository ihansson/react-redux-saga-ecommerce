import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ProductSearch } from "./components/ProductSearch";
import { store } from "./saga";

function renderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <ProductSearch />
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
