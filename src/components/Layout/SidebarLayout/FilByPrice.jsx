import clsx from 'clsx'
import React from 'react'
import styles from './SidebarLayout.module.scss'
import CheckIcon from '@mui/icons-material/Check';
const FilByPrice = () => {
  const handleActive = (e) => {
    if(e.target.classList.contains(clsx(styles.active))){
      e.target.classList.remove(clsx(styles.active));
    }else{
      e.target.classList.add(clsx(styles.active));
    }
  }
  return (
    <div className={clsx(styles.filByPrice)} >
      <p>Filter by price</p>
      <ul className={clsx(styles.listOptions)} >
        <li onClick={handleActive} className={clsx(styles.itemOption)} >
          <span>ASC</span>
          <CheckIcon/>
        </li>
        <li onClick={handleActive} className={clsx(styles.itemOption)} >
          <span>DEC</span>
          <CheckIcon/>
        </li>       
      </ul>
    </div>
  )
}

export default FilByPrice
