import React, { Fragment, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { Section } from '../components';
import { fetchItem } from '../api';
import { Item } from '../types';

const ItemDescription: React.FC<{}> = () => {
  const [item, setItem] = useState<Item>();
  const { id } = useParams();
  const price = useRef({
    decs: '',
    cents: '',
  });


  const formatPrice = ({amount, currency} : {amount: number, currency: string}) => {
    const formatting_options = {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
    };
    const formatter = new Intl.NumberFormat( "es-AR", formatting_options);
  
    const formattedPrice = formatter.format(amount);
    const [decs, cents] = formattedPrice.split(',')
    
    return {decs, cents};
   }

  useEffect(() => {
    if(id)
      fetchItem(id).then(({ item }) => {
        price.current = formatPrice(item.price);
        setItem(item);
      });
  }, [id]);

  return (
    <div className='description'>
      { 
        item &&
          <Fragment>
            <Section categoryPath={item?.categoryPath}/>
            <div className='description-container'>
              <div className='description-row1'>
                <div className='description-row1-left'>
                  <img src={item?.picture} alt={item?.title} width={680} height={680} />
                </div>
                <div className='description-row1-right'>
                  <span className='description-condition'> {item?.condition} - {item?.sold_quantity} vendidos</span>
                  <span className='description-title'> {item?.title} </span>
                  <span className='description-price'> {price.current.decs} <sup className='description-price-super'>{price.current.cents}</sup></span>
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