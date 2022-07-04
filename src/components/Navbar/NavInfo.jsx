import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch  } from 'react-redux';
import {setDisplayOverlay , setItemPropOverlay} from '../../redux';
import ElementSearch from '../ElementSearch/ElementSearch';




const NavInfo = ({styles , clsx}) => {
  const dispath = useDispatch();
  const handleSearchBtn = ()=>{
    dispath(setItemPropOverlay(<ElementSearch/>));
    dispath(setDisplayOverlay(true));
  }
  return (
    <div className={clsx(styles.navInfo )} >
      <ul className={clsx(styles.navList , {
        dFlex : true
      })}>
          <li 
          onClick={handleSearchBtn}
          className={clsx(styles.navItem)} >
            <SearchIcon/>
          </li>
          <li className={clsx(styles.navItem)} >
            <PersonOutlineSharpIcon/>
          </li>
          <li className={clsx(styles.navItem)} >
            <FavoriteBorderSharpIcon/>
          </li>
          <li className={clsx(styles.navItem)} >
            <ShoppingCartOutlinedIcon/>
          </li>
      </ul>
    </div>
  )
}

export default NavInfo
