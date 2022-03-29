// eslint-disable-next-line import/no-cycle
import { LoaderLine, LoaderWrapper } from 'components/Panel/Panel.style';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export interface ILoaderProps {
  time: number;
  working: boolean;
}

const Loader: React.FC<ILoaderProps> = ({ time, working }) => {
  const loader = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'linear' } });
    if (working) {
      tl.fromTo(loader.current, { left: '-100%' }, { duration: time / 1000, left: '0%' });
    } else {
      tl.set(loader.current, { left: '-100%' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [working]);
  return (
    <LoaderWrapper>
      <LoaderLine ref={loader} />
    </LoaderWrapper>
  );
};

export default Loader;
