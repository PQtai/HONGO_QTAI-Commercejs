import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const NavInfo = ({styles , clsx}) => {
  return (
    <div className={clsx(styles.navInfo )} >
      <ul className={clsx(styles.navList , {
        dFlex : true
      })}>
          <li className={clsx(styles.navItem)} >
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
