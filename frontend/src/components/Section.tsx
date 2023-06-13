import React from 'react';

interface SectionProps {
  categoryPath?: string[],
};

const Section: React.FC<SectionProps> = ({categoryPath}) => {
  const pathway = categoryPath ? categoryPath.join(' > ') : ''
    return (
    <div className='results-section'>
      <span>{pathway}</span>
    </div>
  );
};

export default Section