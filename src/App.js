import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { HomePage } from "./pages/home-page/home-page";
import ProductPage from "./pages/product-page/product-page";
import { store } from './redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App rounded-xl bg-slate-50 border-solid border-2 border-gray-400">
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/:title" element={<ProductPage />} />
            {/* <Route exact path="/login" element={<Login />} /> */}
            {/* <Route exact path="/recovery-password" element={<RecoveryPassword />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
