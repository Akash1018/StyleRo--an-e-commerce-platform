import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { LoaderProvider } from "./context/LoaderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <LoaderProvider>
      <App />
    </LoaderProvider>
  </Provider>
);
