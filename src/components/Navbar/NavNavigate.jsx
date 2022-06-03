import React from 'react'

const NavNavigate = ({styled , clsx}) => {
  const itemNavigates = ['Home','Shop','Sale','Pages','Blog'];
  return (
    <div className={clsx(styled.navNavigate)} >
      <ul className={clsx(styled.navList, {
        dFlex : true
      })} >
        {itemNavigates.map((item, index) => {
            return (
              <li  
              className={clsx(styled.navItem)}
              key={index} >{item}</li>
            )
        })}
      </ul>
    </div>
  )
}

export default NavNavigate
