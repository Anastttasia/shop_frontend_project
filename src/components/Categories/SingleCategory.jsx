import { Link } from 'react-router-dom';
import '../../styles/styleCatalog.css';

import Category from './Category';
import Poster from '../Poster/Poster';

const SingleCategory = ({ title, products = [], amount }) => {
    const list = products.filter((_, i) => i < amount);

    return (
        <>
        <Poster />
        <Category />
        </>
    )
};

export default SingleCategory;