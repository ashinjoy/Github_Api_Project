import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";

import Router from "./routes/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
        <Toaster position="top-right" reverseOrder={false} />
          <Routes>
            <Route path="/*" element={<Router />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
