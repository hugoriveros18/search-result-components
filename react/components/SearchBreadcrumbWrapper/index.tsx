import React, { useEffect } from "react";
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext';

export default function SearchBreadcrumbWrapper({
  SearchBreadcrumb
}:SearchBreadcrumbWrapperProps) {

  //SEARCH CONTEXT
  const searchResultContext = useSearchPage();

  //METHODS
  const childValidation = (child:Element, index:number, childIndex:number) => {
    if (child instanceof HTMLElement) {
      if(index === childIndex) {
        child.style.display = 'none';
      } else {
        child.style.display = 'initial';
      }
    }
  }

  //EFFECTS
  useEffect(() => {
    const breadcrumb = document.querySelector('[data-testid="breadcrumb"]');
    const breadcrumbChilds = breadcrumb?.children;

    if(breadcrumbChilds) {
      const breadcrumbToArray = Array.from(breadcrumbChilds).slice(1);
      const searchMap = searchResultContext.map.split(",");

      if(searchMap.includes('productclusternames')) {
        const childIndex = searchMap.indexOf('productclusternames');
        breadcrumbToArray.forEach((child, index) => {
          childValidation(child,index,childIndex);
        })
      } else if(searchMap.includes('productClusterIds')) {
        const childIndex = searchMap.indexOf('productClusterIds');
        breadcrumbToArray.forEach((child, index) => {
          childValidation(child,index,childIndex);
        })
      } else if(searchMap.includes('ft')) {
        breadcrumbToArray.forEach((child, index) => {
          childValidation(child,index,0);
        })
      }
    }
  },[searchResultContext])


  //JSX
  return (
    <SearchBreadcrumb/>
  )
}

