import React, { useCallback, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import styled from './Navbar.module.scss';
import NavLogo from './NavLogo';
import NavNavigate from './NavNavigate';
import NavInfo from './NavInfo';
const Navbar = () => {
  const elementNav = useRef();
  const [y, setY] = useState(window.scrollY);
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        elementNav.current.style.top = '0px';
        if(y > 100){
          elementNav.current.style.backgroundColor = '#FFFFFF';
        }else{
          elementNav.current.style.backgroundColor = '';
        }
      } else if (y < window.scrollY && window.scrollY > 150) {
        elementNav.current.style.top = '-120px';
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);



  return (
    <div ref={elementNav} className={clsx(styled.navbar)} >
        <NavLogo 
        clsx={clsx}
        styled={styled}
        />
        <NavNavigate
        clsx={clsx}
        styled={styled}
        />
        <NavInfo
        clsx={clsx}
        styled={styled}
        />
    </div>
  )
}

export default Navbar
