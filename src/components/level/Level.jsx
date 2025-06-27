import React from 'react';
import comp from '../../assets/comp.svg';

const Level = () => {
  return (
    <section className="w-full select-none mt-[30px]">
      <img
        className="w-full h-auto block mx-auto"
        src={comp}
        alt="comp image"
        draggable="false"
      />
    </section>
  );
};

export default React.memo(Level);
