import React, { useEffect } from 'react';
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext';

export default function DidYouMeanWrapper({
  DidYouMean
}:DidYouMeanWrapperProps) {

  //SEARCH CONTEXT
  const searchResultContext = useSearchPage();

  //METHODS
  const addStyle = () => {
    const didYouMeanTerm = document.querySelector('.vtex-search-2-x-didYouMeanTerm');
    const didYouMeanTermLink = didYouMeanTerm?.firstElementChild;

    if(didYouMeanTermLink) {
      if (didYouMeanTermLink instanceof HTMLElement) {
        didYouMeanTermLink.style.color = "#ea6900"
      }
    }
  }

  //EFFECTS
  useEffect(() => {
    window.addEventListener('load', addStyle);

    return () => {
      window.removeEventListener('load', addStyle);
    }
  },[])

  useEffect(() => {
    addStyle();
  },[searchResultContext])

  //JSX
  return (
    <DidYouMean />
  )
}

