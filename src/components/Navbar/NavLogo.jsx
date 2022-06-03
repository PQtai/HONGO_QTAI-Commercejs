import React from 'react'
import Logo from '../../assets/img/logo.png'
const NavLogo = ({styled , clsx}) => {
  return (
    <div className={clsx(styled.navLogo, {
        dFlex : true
    })} >
        <img src={Logo} ></img>
    </div>
  )
}

export default NavLogo
