import './Sidebar.css';
import FilterLogo from '../../image/icon/icon_bag.svg'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <p className='sidebarTitle'>Категории</p>
      <nav>
        <ul lassName='menu'>
          <li>
            <NavLink to={`/categories/${1}`}>
              Link
            </NavLink>
          </li>

        </ul>
      </nav>
    </div>

  )
};

export default Sidebar;