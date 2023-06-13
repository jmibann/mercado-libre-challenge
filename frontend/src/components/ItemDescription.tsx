import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Section } from '../components';
import { fetchItem } from '../api';
import { Item } from '../types';

const ItemDescription: React.FC<{}> = () => {
  const [item, setItem] = useState<Item>();
  let { id } = useParams();

  useEffect(() => {
    if(id)
      fetchItem(id).then(({ item }) => setItem(item));
  }, [id]);

  return (
    <div className='description'>
      { 
        item &&
          <Fragment>
            <Section />
            <div className='description-container'>
              <div className='description-row1'>
                <div className='description-row1-left'>
                  <img src={item?.picture} alt={item?.title} width={680} height={680} />
                </div>
                <div className='description-row1-right'>
                  <span className='description-condition'> {item?.condition} - {item?.sold_quantity} vendidos</span>
                  <span className='description-title'> {item?.title} </span>
                  <span className='description-price'> ${item?.price?.amount} </span>
                  <button className='description-button'> Comprar </button>
                </div>
              </div>
              <div className='description-row2'>
                <span className='description-row2-product'> Descripción del producto </span>
                <span className='description-row2-text'> {item?.description} </span>
              </div>
            </div>
          </Fragment>
      }
    </div>
  );
};

export default ItemDescription;