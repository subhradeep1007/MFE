import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);
  console.log('hello moto hello')
  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
