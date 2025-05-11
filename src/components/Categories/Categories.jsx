import { Link } from 'react-router-dom';
import '../../styles/styleCatalog.css'

const Categories = ({ title, products = [], amount }) => {
    const list = products.filter((_, i) => i < amount);

    return (
        <section className='styleCategories styleSection' >
          <h2>{title}</h2>
            <div className='cardContainer'>
                {list.map(({ id, name, image}) => (
                    <Link to={`/categories/${id}`} key={id} className='card'>
                        <div className='containerImgBlock' style={{ backgroundImage: `url(${image})` }}></div>
                        <div className=''>
                            <h3 className='titleProduct'>{name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
};

export default Categories;