import React from "react";
import AppRoutes from "../Routes/Routes";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const App = () =>{
    return(
        <div className="app">
            <Header />
            <AppRoutes/>
            <Footer />
        </div>
    )
}

export default App