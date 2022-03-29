import { useEffect, useState } from 'react';

export interface IDimensions {
  width: number;
  height: number;
}
export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState<IDimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    window.addEventListener('load', () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      window.addEventListener('resize', () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });
    });
  }, []);

  return dimensions;
};
