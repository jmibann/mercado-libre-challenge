import axios from 'axios';

import { ItemsSearchResult, ItemsDetails } from '../types'

export const fetchItems = (item: string) => axios.get<ItemsSearchResult>(`/api/items?q=${item}`);

export const fetchItem = (id: string) => axios.get<ItemsDetails>(`/api/items/${id}`).then(({data}) => data);