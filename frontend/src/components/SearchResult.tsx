import React,{ useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Section, ItemList } from './index'
import { fetchItems } from '../api'
import { ItemsSearchResult } from '../types';

const SearchResult: React.FC<{}> = () => {
  const [items, setItems] = useState<ItemsSearchResult>();
  const [URLSearchParams] = useSearchParams();
  const keyword = URLSearchParams.get('search')

  useEffect(() => {
    if(keyword)
      fetchItems(keyword).then(({data}) => setItems(data));
  },[keyword]);

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