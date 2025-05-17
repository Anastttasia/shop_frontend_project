import { Link } from 'react-router-dom';
import '../../styles/styleCatalog.css'

const Products = ({ title, style = {}, products = [], amount }) => {
    const list = products.filter((_, i) => i < amount);

    return (
        <section className='styleProducts styleSection' style={style}>
            {title && <h2>{title}</h2>}
            <div className='cardContainer'>
                {list.map(({ id, images, title, category: { name: cat }, price }) => (
                    <Link to={`/products/${id}`} key={id} className='card'>
                        <div className='containerImgBlock' style={{ backgroundImage: `url(${images[0]})` }}></div>
                        <div className=''>
                            <div className='titleProduct'>{title}</div>
                            <div className='descriptionBlock'>
                                <div className='priceProductBlock'>
                                    <div className='priceProduct'>{price}$</div>
                                    <div className='oldPriceProduct'>{Math.floor(price * 1.8)}$</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
};

export default Products;