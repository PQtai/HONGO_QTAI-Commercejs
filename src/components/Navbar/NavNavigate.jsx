import React from 'react'

const NavNavigate = ({styles , clsx}) => {
  const itemNavigates = ['Home','Shop','Sale','Pages','Blog'];
  return (
    <div className={clsx(styles.navNavigate)} >
      <ul className={clsx(styles.navList, {
        dFlex : true
      })} >
        {itemNavigates.map((item, index) => {
            return (
              <li  
              className={clsx(styles.navItem)}
              key={index} >{item}</li>
            )
        })}
      </ul>
    </div>
  )
}

export default NavNavigate
