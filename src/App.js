import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { Provider } from "react-redux";
import store from "./store/store";
import StoreWrapper from "./store/storeWrapper";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <StoreWrapper>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Router />
        </StoreWrapper>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
