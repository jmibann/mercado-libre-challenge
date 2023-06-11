import React from 'react';

import { Section } from '../components';

interface ItemDescriptionProps {

};

const ItemDescription: React.FC<ItemDescriptionProps> = () => {
  return (
    <div className='description'>
      <Section />
      <div className='description-container'>
        <div className='description-row1'>
          <div className='description-row1-left'>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Albert_Gleizes%2C_1914%2C_Paysage_Cubiste%2C_oil_on_canvas%2C_97_x_130_cm%2C_published_in_Der_Sturm%2C_5_October_1920.jpg/680px-Albert_Gleizes%2C_1914%2C_Paysage_Cubiste%2C_oil_on_canvas%2C_97_x_130_cm%2C_published_in_Der_Sturm%2C_5_October_1920.jpg" width={680} height={680}/>
          </div>
          <div className='description-row1-right'>
            <span className='description-condition'> Nuevo - 234 vendidos</span>
            <span className='description-title'> Deco Reverse Sombrero Oxford </span>
            <span className='description-price'> $1.980 </span>
            <button className='description-button'> Comprar </button>
          </div>
        </div>
        <div className='description-row2'>
          <span className='description-row2-product'> Descripción del producto </span>
          <span className='description-row2-text'> texto del producto </span>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;