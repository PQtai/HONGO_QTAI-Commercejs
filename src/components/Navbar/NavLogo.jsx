import React from 'react'
import Logo from '../../assets/img/logo.png'
const NavLogo = ({styles , clsx}) => {
  return (
    <div className={clsx(styles.navLogo, {
        dFlex : true
    })} >
        <img alt='Logo' src={Logo} ></img>
    </div>
  )
}

export default React.memo(NavLogo);
