import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "../Routes/Routes";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { getCategoties } from "../../features/categories/categoriesSlice";
import Sidebar from "../Sidebar/Sidebar";


const App = () =>{
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoties());
    }, [dispatch])

    return(
        <div className="app">
            <Header />
            <div className="wrapper">
                <Sidebar/>
                <AppRoutes/>
            </div>
            <Footer />
        </div>
    )
}

export default App