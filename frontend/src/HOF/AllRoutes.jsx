import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "../pages/cartPage/CartPage";
import AccessoriesPage from "../pages/categoriesPages/AccessoriesPage";
import KidsPage from "../pages/categoriesPages/KidsPage";
import MenPage from "../pages/categoriesPages/MenPage";
import WomenPage from "../pages/categoriesPages/WomenPage";
import CheckoutPage from "../pages/checkoutPage/CheckoutPage";
import AddNewProductForm from "../pages/dashboard/AddNewProductForm";
import DashBoard from "../pages/dashboard/DashBoard";
import ProductTable from "../pages/dashboard/ProductTable";
import UserTable from "../pages/dashboard/UserTable";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login-signup/LoginPage";
import SignupPage from "../pages/login-signup/SignupPage";
import PageNotFound from "../pages/pagenotfound/PageNotFound";
import SingleProduct from "../pages/singleProduct/SingleProduct";
import RoutesForAdminOnly from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/dashboard/users"
        element={
          <RoutesForAdminOnly>
            <UserTable />
          </RoutesForAdminOnly>
        }
      />
      <Route
        path="/dashboard/products"
        element={
          <RoutesForAdminOnly>
            <ProductTable />
          </RoutesForAdminOnly>
        }
      />
      <Route
        path="/dashboard/products/add"
        element={
          <RoutesForAdminOnly>
            <AddNewProductForm />
          </RoutesForAdminOnly>
        }
      />
      <Route path="/men" element={<MenPage />} />
      <Route
        path="/dashboard"
        element={
          <RoutesForAdminOnly>
            <DashBoard />
          </RoutesForAdminOnly>
        }
      />
      <Route path="/women" element={<WomenPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/kids" element={<KidsPage />} />
      <Route path="/accessories" element={<AccessoriesPage />} />
      <Route path="/cart/checkout" element={<CheckoutPage />} />
      <Route path="/:category/:id" element={<SingleProduct />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
