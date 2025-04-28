import Sidebar from '../../components/Sidebar/Sidebar';
import './Catalog.css';

const CatalogPage = () => {
  return (
    <div className='wrapper'> 
      <Sidebar/>
      <div className='catalogWrapper'></div>
    </div>

  )
};

export default CatalogPage;