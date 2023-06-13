import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Item } from '../types'

const ItemList: React.FC<Item> = ({ id, picture, price, title}) => {
  const navigate = useNavigate();
  const onClickHandler = (id: string) => navigate(`/items/${id}`);

    return (
      <div className='results-item' onClick={() => onClickHandler(id)}>
        <div className='results-list-image'>
          <img src={picture} width={180} height={180} alt={title}/>
        </div>
        <div className='results-list-description'>
          <div className='results-list-description-left'>
            <span className='results-list-price'>${price.amount}</span>
            <span>{title}</span>
          </div>
          <div className='results-list-description-right'>
            <span className='results-list-location'>location</span>
          </div>
        </div>
      </div>
    );
};

export default ItemList