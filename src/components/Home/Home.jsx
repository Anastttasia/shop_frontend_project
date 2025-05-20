import React, { useEffect } from "react";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Sidebar from "../Sidebar/Sidebar"

import { useDispatch, useSelector } from "react-redux";
import { filterByPrice } from "../../features/products/productsSlice";

const Home = () => {
    const dispatch = useDispatch();
    const {
        products: { list, filtered },
        categories,
    } = useSelector((state) => state);

    useEffect(() => {
        if (!list) return;
        dispatch(filterByPrice(100))
    }, [dispatch, list.length]);

    return (
        <>
            {/* <Poster />
            <Products products={list} amount={5} title="Trending" />
            <Categories products={categories.list} amount={5} title="Worth seeing" />
            <Products products={filtered} amount={4} title="100" /> */}

            <div className="wrapper">
                <Sidebar />
                <Poster />
                <Products products={list} amount={5} title="Trending" />
                <Categories products={categories.list} amount={5} title="Worth seeing" />
                {/* <Products products={filtered} amount={5} title="100"  /> */}
            </div>
        </>
    )
}

export default Home