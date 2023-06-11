import React,{ useEffect, useState } from 'react';

import { Section, ItemList } from './index'
import { fetchItems } from '../api'
import { ItemsSearchResult } from '../types';

const SearchResult: React.FC<{}> = () => {
  const [items, setItems] = useState<ItemsSearchResult>();
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('search');

  useEffect(() => {
    if(myParam)
      fetchItems(myParam).then(({data}) => setItems(data));
  },[myParam]);

  return (
    <div className='results'>
      <Section />
      {
        items?.items.slice(0, 4).map(item => <ItemList key={item.id} {...item}/>)
      }
    </div>
  );
};

export default SearchResult