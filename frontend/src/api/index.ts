import axios from 'axios';

import { ItemsSearchResult } from '../types'

export const fetchItems = (item: string) => axios.get<ItemsSearchResult>(`/api/items?q=${item}`);