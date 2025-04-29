import './Sidebar.css';
import styles from  './Sidebar.css';
import FilterLogo from '../../image/icon/icon_bag.svg'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAction } from '@reduxjs/toolkit';

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories)

  console.log("list", list)

  return (
    <div className='sidebar'>
      <p className='sidebarTitle'>Categories</p>
      <nav>
        <ul className='menu'>
          {list.map(({ id, name }) => (
            <li key={id} className='menusection'>
              <NavLink 
              className= {({ isActive }) => `${isActive ? styles.menusectionActive : ""}`}
              to={`/categories/${id}`} >{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>

  )
};

export default Sidebar;