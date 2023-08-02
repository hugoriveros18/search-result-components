import React from 'react';
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext';

export default function Test() {

  //SEARCH CONTEXT
  const searchResultContext = useSearchPage();
  console.log('searchResultContext', searchResultContext);

  //JSX
  return(
    <></>
  )

}
