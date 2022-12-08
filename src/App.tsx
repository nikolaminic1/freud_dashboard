import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import CLayout from "./layout/CLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./app/store";
import { persistor } from "./app/store";
import CategoriesList from "./pages/CategoriesList";
import NotFound from "./pages/NotFound";
import Subcategories from "./pages/Subcategories";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <CookiesProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                <CLayout>
                  <Routes>
                    <Route path="/categories">
                      <Route index={true} element={<CategoriesList />} />
                      <Route path="subcategories">
                        <Route index={true} element={<Subcategories />} />
                        <Route path=":slug" element={<ProductDetail />} />
                      </Route>
                    </Route>

                    {/* <Route
                      path="/become_business_owner"
                      element={<BecomeBusinessOwner />}
                    />
                    <Route path="/upload_logo" element={<UploadLogo />} />
                    <Route
                      path="/upload_background"
                      element={<UploadBackground />}
                    />
                    <Route
                      path="/update_business_hours"
                      element={<AddBusienssHours />}
                    />
                    <Route path="/my_restaurant">
                      <Route index={true} element={<MyRestaurant />} />
                      <Route path="about" element={<AboutMyRestaurant />} />
                      <Route path="categories">
                        <Route
                          index={true}
                          element={<CategoriesMyRestaurant />}
                        ></Route>
                      </Route>
                      <Route path="orders" element={<OrdersMyRestaurant />} />
                    </Route> */}
                    <Route path="/add_product" element={<AddProduct />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path={"*"} element={<NotFound />} />
                  </Routes>
                </CLayout>
              </BrowserRouter>
            </PersistGate>
          </Provider>
        </CookiesProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
