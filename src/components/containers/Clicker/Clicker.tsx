import Panel from 'components/Panel/Panel';
import { useAppSelector } from 'hooks/redux-hooks';
import { IDimensions } from 'hooks/useWindowDimesions';
import React from 'react';
// eslint-disable-next-line import/no-cycle
import { ClickerWrapper } from './Clicker.style';

export interface IPropsDim {
  dimensions: IDimensions;
}

const Clicker: React.FC<IPropsDim> = ({ dimensions }) => {
  const clickers = useAppSelector((state) => state.clicker.clickers);
  return (
    <ClickerWrapper dimensions={dimensions}>
      {clickers.map((item) => (
        <Panel key={item.name} panel={item} />
      ))}
    </ClickerWrapper>
  );
};

export default Clicker;
