import axios from 'axios';

import { ItemsSearchResult, ItemsDetails } from '../types'

const BASE_URL = 'http://localhost:8080';

export const fetchItems = (item: string) => axios.get<ItemsSearchResult>(`${BASE_URL}/api/items?q=${item}`);

export const fetchItem = (id: string) => axios.get<ItemsDetails>(`${BASE_URL}/api/items/${id}`).then(({data}) => data);