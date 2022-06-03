import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const NavInfo = ({styled , clsx}) => {
  return (
    <div className={clsx(styled.navInfo )} >
      <ul className={clsx(styled.navList , {
        dFlex : true
      })}>
          <li className={clsx(styled.navItem)} >
            <SearchIcon/>
          </li>
          <li className={clsx(styled.navItem)} >
            <PersonOutlineSharpIcon/>
          </li>
          <li className={clsx(styled.navItem)} >
            <FavoriteBorderSharpIcon/>
          </li>
          <li className={clsx(styled.navItem)} >
            <ShoppingCartOutlinedIcon/>
          </li>
      </ul>
    </div>
  )
}

export default NavInfo
