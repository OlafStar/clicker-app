import { useAppDispatch } from 'hooks/redux-hooks';
import React from 'react';
import { upgrade, upgradeClicker } from 'slices/clickerSlice';
import { UpgradePanelWrapper } from './UpgradePanel.style';

interface UpgradePanelProps {
  upgradeProps: upgrade;
}

const UpgradePanel: React.FC<UpgradePanelProps> = ({ upgradeProps }) => {
  const dispatch = useAppDispatch();
  return (
    <UpgradePanelWrapper>
      <h2>{upgradeProps.name}</h2>
      <span>
        <p>
          Upgrades {upgradeProps.clicker} by {upgradeProps.multiplayer}.
        </p>
        <button
          type="button"
          onClick={() => {
            dispatch(upgradeClicker(upgradeProps));
          }}
        >
          Buy: ${upgradeProps.price}
        </button>
      </span>
    </UpgradePanelWrapper>
  );
};

export default UpgradePanel;
