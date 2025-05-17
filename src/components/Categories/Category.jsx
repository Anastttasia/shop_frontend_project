import '../../styles/styleCatalog.css'

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import { useSelector } from 'react-redux';

import Products from '../Products/Products'


const Category = () => {
    const { id } = useParams();
    const { list } = useSelector(({ categories }) => categories);

    const defaultValues = {
        title: "",
        price_min: 0,
        price_max: 0,
    }

    const defaultParams = {
        categoryId: id,
        limit: 5,
        offset: 0,
        ...defaultValues,
    }

    const [isEnd, setEnd] = useState(false)
    const [cat, setCat] = useState("")
    const [items, setItems] = useState([])
    const [values, setValues] = useState(defaultValues)
    const [params, setParams] = useState(defaultParams)

    const { data, isLoading, isSuccess } = useGetProductsQuery(params);

    useEffect(() => {
        if (!id) return;

        setValues(defaultValues)
        setItems([])
        setEnd(false)
        setParams({ ...defaultParams, categoryId: id })

    }, [id])

    useEffect(() => {
        if (!isLoading) return;

        if (!data.length) return setEnd(true);

        setItems((_items) => [...items, ...data])
    }, [data, isLoading])

    useEffect(() => {
        if (!id || !list.length) return;

        const { name } = list.find((item) => item.id === id * 1)
        setCat(name)
    }, [list, id])

    const handlChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value })
    }

    const handlSubmit = (e) => {
        e.preventDefault();

        setItems([])
        setEnd(false)
        setParams({ ...defaultParams, ...values })
    }


    const handleReset = () => {
        setValues(defaultValues)
        setParams(defaultParams)
        setEnd(false)
    }

    console.log("data", data)

    return (
        <section className='styleProducts '>
            <h2>{cat}</h2>
            <form className='filters' onSubmit={handlSubmit}>
                <div className='filter'>
                    <span className='filtersName'>Product name</span>
                    <input className='filtersInput' type='text' name='title' onChange={handlChange} placeholder='Name' value={values.title}></input>
                </div>
                <div className='filter'>
                    <span className='filtersName'>Price from</span>
                    <input className='filtersInput' type='number' name='price_min' onChange={handlChange} placeholder='0' value={values.title}></input>
                </div>
                <div className='filter'>
                    <span className='filtersName'>Price to</span>
                    <input className='filtersInput' type='number' name='price_max' onChange={handlChange} placeholder='0' value={values.title}></input>
                </div>
                <button type='submit' hidden />
            </form>
            {isLoading ? (
                <div className='overlay'>
                    <div className='preloader'>Loading...</div>
                </div>

            ) : !isSuccess || !items.length ? (
                <div className='back'>
                    <span>No results</span>
                    <button onClick={handleReset}>Reset</button>
                </div>
            ) : (
                <Products title="" products={items} style={{ padding: 0 }} amount={items.length} />
            )}
            {!isEnd && (
                <div className='moreContsiner'>
                    <button className='more' onClick={() => setParams({ ...params, offset: params.offset + params.limit })}>See more</button>
                </div>
            )}

        </section>

    )
};

export default Category;