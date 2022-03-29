import Loader from 'components/Loader/Loader';
import { useAppDispatch } from 'hooks/redux-hooks';
import React from 'react';
import { clicker, lvlup, incrementAsync } from 'slices/clickerSlice';
import { PanelWrapper, Circle, Btn } from './Panel.style';

interface IPanelProps {
  panel: clicker;
}

const Panel: React.FC<IPanelProps> = ({ panel }) => {
  const dispatch = useAppDispatch();
  return (
    <PanelWrapper>
      <Circle onClick={() => (panel.lvl > 0 ? dispatch(incrementAsync(panel)) : null)}>{panel.lvl}</Circle>
      <Loader time={panel.time} working={panel.working} />
      <Btn onClick={() => dispatch(lvlup(panel))}>Lvl up: ${panel.upgrade.toFixed(1)}</Btn>
    </PanelWrapper>
  );
};

export default Panel;
