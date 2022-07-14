import React from 'react';
import clsx from 'clsx';
import styles from './SearchCpn.module.scss';
import BodySearch from './BodySearch/BodySearch';
import { useSelector } from 'react-redux';
import { filter_options_Selector, search_parametersSelector } from '../../redux';
const SearchCpn = () => {
  const search_parameters = useSelector(search_parametersSelector);
  const filter_options = useSelector(filter_options_Selector);
  const {
    filter_with_categories,
    filter_with_price_asc,
    filter_with_price_desc 
  } = filter_options;
  const {results_search} = search_parameters;
  return (
    <div className={clsx(styles.searchCpn)} >
      <BodySearch 
      results_search={results_search} 
      filter_with_categories={filter_with_categories}
      filter_with_price_asc={filter_with_price_asc}
      filter_with_price_desc={filter_with_price_desc}
      />
    </div>
  )
}

export default SearchCpn
