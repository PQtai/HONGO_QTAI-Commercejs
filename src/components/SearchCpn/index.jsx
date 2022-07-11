import React from 'react';
import clsx from 'clsx';
import styles from './SearchCpn.module.scss';
import BodySearch from './BodySearch/BodySearch';
import { useSelector } from 'react-redux';
import { search_parametersSelector } from '../../redux';
const SearchCpn = () => {
  const search_parameters = useSelector(search_parametersSelector);
  const {results_search} = search_parameters;
  return (
    <div className={clsx(styles.searchCpn)} >
      <BodySearch results_search={results_search} />
    </div>
  )
}

export default SearchCpn
