import HomePage from "./pages/Home/HomePage";
import NavBarEl from "./components/utilty/NavBarEl";
import FooterEl from "./components/utilty/FooterEl";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import RegestPage from "./pages/Auth/RegestPage";
import AllCataguryPage from "./pages/Catagury/AllCataguryPage";
import AllBrandContanier from "./components/Brands.js/AllBrandContanier";
import SearchProductPage from "./pages/Product/SearchProductPage";
import ProductPage from "./pages/Product/ProductPage";
import CartPage from "./pages/Cart/CartPage";
import PaymentMethodPage from "./pages/Payment/PaymentMethodPage";
import AdminAllProductsPage from "./pages/Admin/AdminAllProductsPage";
import AdminOrdersPage from "./pages/Admin/AdminOrdersPage";
import AdminOrdersDetailsPage from "./pages/Admin/AdminOrdersDetailsPage";
import AdminNewBrandPage from "./pages/Admin/AdminNewBrandPage";
import AdminNewCataguryPage from "./pages/Admin/AdminNewCataguryPage";
import AdminNewSubCataguryPage from "./pages/Admin/AdminNewSubCataguryPage";
import AdminNewProductPage from "./pages/Admin/AdminNewProductPage";
import UserAllProductPage from "./pages/User/UserAllProductPage";
import UserFavoritePage from "./pages/User/UserFavoritePage";
import UserAdressPage from "./pages/User/UserAdressPage";
import UserNewAddressPage from "./pages/User/UserNewAddressPage";
import UserEditAddressPage from "./pages/User/UserEditAddressPage";
import UserProfilePage from "./pages/User/UserProfilePage";
import AdminEditProductpage from "./pages/Admin/AdminEditProductpage";
import ForgetPassPage from "./pages/Auth/ForgetPassPage";
import ForgetPassResetCode from "./pages/Auth/ForgetPassResetCode";

function App() {
  return (
    <div className="App">
      <NavBarEl />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/regest" element={<RegestPage />} />
          <Route path="/forgetpassword" element={<ForgetPassPage />} />
          <Route path="/resetcode" element={<ForgetPassResetCode />} />
          <Route path="/allcatagury" element={<AllCataguryPage />} />
          <Route path="/allbrands" element={<AllBrandContanier />} />
          <Route path="/allproducts" element={<SearchProductPage />} />
          <Route path="/allproducts/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethod" element={<PaymentMethodPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/orders/22" element={<AdminOrdersDetailsPage />} />
          <Route path="/admin/newbrand" element={<AdminNewBrandPage />} />
          <Route path="/admin/newcatagury" element={<AdminNewCataguryPage />} />
          <Route
            path="/admin/newsubcatagury"
            element={<AdminNewSubCataguryPage />}
          />
          <Route
            path="/admin/editproduct/:id"
            element={<AdminEditProductpage />}
          />
          <Route path="/admin/newproduct" element={<AdminNewProductPage />} />
          <Route path="/user/allproduct" element={<UserAllProductPage />} />
          <Route path="/user/favorite" element={<UserFavoritePage />} />
          <Route path="/user/address" element={<UserAdressPage />} />
          <Route path="/user/editaddress" element={<UserEditAddressPage />} />
          <Route path="/user/addaddress" element={<UserNewAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
        </Routes>
      </BrowserRouter>
      <FooterEl />
    </div>
  );
}

export default App;
