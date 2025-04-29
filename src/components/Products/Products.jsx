import { Link } from 'react-router-dom';
import './Products.css';

const Products = ({ title, products = [] }) => (
    <section className='sectionBanner'>
        {title && <h2>{title}</h2>}
        <div>
            {products.map(({ id, images, title, category: { name: cat }, price }) => (
                <Link to={`/products/${id}`} key={id} className='stylesProduct'>
                    <div className=''></div>
                </Link>
            ))}
        </div>
    </section>
);

export default Products;