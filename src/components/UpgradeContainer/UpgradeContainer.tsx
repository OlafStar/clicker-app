import UpgradePanel from 'components/UpgradePanel/UpgradePanel';
import { useAppSelector } from 'hooks/redux-hooks';
import React from 'react';
import { UpgradeWrapper } from './UpgradeContainer.style';

const UpgradeContainer: React.FC = () => {
  const upgrades = useAppSelector((state) => state.clicker.upgrades);
  return (
    <UpgradeWrapper>
      {upgrades.map((item) => (!item.owned ? <UpgradePanel key={item.name} upgradeProps={item} /> : null))}
    </UpgradeWrapper>
  );
};

export default UpgradeContainer;
