import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';
import ManageUser from './User/ManageUser';
import Adduser from './User/Adduser';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import ManageCategory from './Category/ManageCategory';
import AddCategory from './Category/AddCategory';
import ManageBrand from './Brand/ManageBrand';
import AddBrand from './Brand/AddBrand';
import Information from './User/Information';
import ChangePassword from './User/ChangePassword';
import AddProduct from './Product/AddProduct';
import ManageProduct from './Product/ManageProduct';
import EditProduct from './Product/EditProduct';
import ManageProductDetail from './Product/ProductDetail/ManageProductDetail';
import ManageProductImage from './Product/ProductImage/ManageProductImage';
import AddProductDetail from './Product/ProductDetail/AddProductDetail';
import EditProductDetail from './Product/ProductDetail/EditProductDetail';
import AddBanner from './Banner/AddBanner';
import ManageBanner from './Banner/ManageBanner';
import ManageTypeShip from './TypeShip/ManageTypeShip';
import AddTypeShip from './TypeShip/AddTypeShip';
import AddTypeVoucher from './Voucher/AddTypeVoucher';
import ManageTypeVoucher from './Voucher/ManageTypeVoucher';
import AddVoucher from './Voucher/AddVoucher';
import ManageVoucher from './Voucher/ManageVoucher';
import AddSupplier from './Supplier/AddSupplier';
import ManageSupplier from './Supplier/ManageSupplier';
import AddReceipt from './Receipt/AddReceipt';
import ManageReceipt from './Receipt/ManageReceipt';
import DetailReceipt from './Receipt/DetailReceipt';


function HomePageAdmin(props) {
    return (

        <Router>

            <Switch>
                <div className="sb-nav-fixed">
                    <Header />
                    <div id="layoutSidenav">
                        <SideBar />
                        <div id="layoutSidenav_content">
                            <main>
                                <Route exact path="/admin/">
                                    <ManageUser />
                                </Route>
                                <Route exact path="/admin/list-user">
                                    <ManageUser />
                                </Route>
                                <Route exact path="/admin/add-user">
                                    <Adduser />
                                </Route>
                                <Route exact path="/admin/edit-user/:id">
                                    <Adduser />
                                </Route>
                                <Route exact path="/admin/list-category">
                                    <ManageCategory />
                                </Route>
                                <Route exact path="/admin/add-category">
                                    <AddCategory />
                                </Route>
                                <Route exact path="/admin/edit-category/:id">
                                    <AddCategory />
                                </Route>
                                <Route exact path="/admin/list-brand">
                                    <ManageBrand />
                                </Route>
                                <Route exact path="/admin/add-brand">
                                    <AddBrand />
                                </Route>
                                <Route exact path="/admin/edit-brand/:id">
                                    <AddBrand />
                                </Route>
                                <Route exact path="/admin/infor/:id">
                                    <Information />
                                </Route>
                                <Route exact path="/admin/change-password/:id">
                                    <ChangePassword />
                                </Route>
                                <Route exact path="/admin/add-product">
                                    <AddProduct />
                                </Route>
                                <Route exact path="/admin/edit-product/:id">
                                    <EditProduct />
                                </Route>
                                <Route exact path="/admin/list-product">
                                    <ManageProduct />
                                </Route>
                                <Route exact path="/admin/add-supplier">
                                    <AddSupplier />
                                </Route>
                                <Route exact path="/admin/edit-supplier/:id">
                                    <AddSupplier />
                                </Route>
                                <Route exact path="/admin/list-supplier">
                                    <ManageSupplier />
                                </Route>
                                <Route exact path="/admin/add-receipt">
                                    <AddReceipt />
                                </Route>
                                <Route exact path="/admin/list-receipt">
                                    <ManageReceipt />
                                </Route>
                                <Route exact path="/admin/detail-receipt/:id">
                                    <DetailReceipt />
                                </Route>
                                <Route exact path="/admin/list-product-detail/:id">
                                    <ManageProductDetail />
                                </Route>
                                <Route exact path="/admin/list-product-detail-image/:id">
                                    <ManageProductImage />
                                </Route>
                                <Route exact path="/admin/add-product-detail/:id">
                                    <AddProductDetail />
                                </Route>
                                <Route exact path="/admin/update-product-detail/:id">
                                    <EditProductDetail />
                                </Route>
                                <Route exact path="/admin/add-banner">
                                    <AddBanner />
                                </Route>
                                <Route exact path="/admin/edit-banner/:id">
                                    <AddBanner />
                                </Route>
                                <Route exact path="/admin/list-banner">
                                    <ManageBanner />
                                </Route>
                                <Route exact path="/admin/list-typeship">
                                    <ManageTypeShip />
                                </Route>
                                <Route exact path="/admin/add-typeship">
                                    <AddTypeShip />
                                </Route>
                                <Route exact path="/admin/edit-typeship/:id">
                                    <AddTypeShip />
                                </Route>
                                <Route exact path="/admin/add-typevoucher">
                                    <AddTypeVoucher />
                                </Route>
                                <Route exact path="/admin/list-typevoucher">
                                    <ManageTypeVoucher />
                                </Route>
                                <Route exact path="/admin/edit-typevoucher/:id">
                                    <AddTypeVoucher />
                                </Route>
                                <Route exact path="/admin/add-voucher">
                                    <AddVoucher />
                                </Route>
                                <Route exact path="/admin/edit-voucher/:id">
                                    <AddVoucher />
                                </Route>
                                <Route exact path="/admin/list-voucher">
                                    <ManageVoucher />
                                </Route>
                            </main>
                            <Footer />
                        </div>
                    </div>

                </div>
            </Switch>

        </Router>

    );
}

export default HomePageAdmin;