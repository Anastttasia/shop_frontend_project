import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "../Routes/Routes";

import Header from "../Header/Header";
import UserForm from "../User/UserForm";

import { getCategoties } from "../../features/categories/categoriesSlice";
import { getProducts } from "../../features/products/productsSlice";



const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoties());
        dispatch(getProducts());
    }, [dispatch])

    return (
        <div className="app">
            <Header />
            <UserForm />
            {/* <div className="wrapper">
                <Sidebar />
                <AppRoutes />
            </div> */}

            <AppRoutes />
      
        </div>
    )
}

export default App