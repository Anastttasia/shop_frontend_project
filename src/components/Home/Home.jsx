import React, { useEffect } from "react";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";

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
            <Poster />
            <Products products={list} amount={4} title="Trendining" />
            <Categories products={categories.list} amount={4} title="Worth seeing" />
            {/* <Products products={filtered} amount={4} title="100" /> */}
        </>
    )
}

export default Home