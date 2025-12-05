import React from 'react';

const Container = ({ children, className }) => {
  return (
    <section className={`${className} container lg:px-0 px-4`}>
      {children}
    </section>
  );
};

export default Container;
