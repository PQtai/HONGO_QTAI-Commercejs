import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { search_parametersSelector } from '../../../redux'
import styles from './BannerSearch.module.scss'
const BannerSearch = () => {
  const search_parameters = useSelector(search_parametersSelector);
  const {results_search} = search_parameters;
  return (
    <div className={clsx(styles.banner)} >
      <div className={clsx(styles.img)}/>
      <div className={clsx(styles.wrapTitle)}>
        <div className={clsx(styles.title)} >
          <p>WE PROVIDE LATEST FASHION TRENDS</p>
          <h2>Search results: <span>{`"${results_search}"`}</span></h2>
          <ul className={clsx(styles.directional)} >
            <li className={clsx(styles.itemLink)} >
              <Link to='/HONGO_QTAI-Commercejs/'><span>Home</span></Link>
            </li>
            <li className={clsx(styles.itemLink)} >
              <span>Shop</span>
            </li>
            <li className={clsx(styles.itemLink)} >
              <span>Search results for {`"${results_search}"`}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BannerSearch
