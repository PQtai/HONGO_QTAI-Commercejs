import React, { useEffect } from 'react'
import SearchCpn from '../../components/SearchComponent'
const Search = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div >
      <SearchCpn/>
    </div>
  )
}

export default Search
