import { useAppSelector } from 'hooks/redux-hooks';
import React from 'react';
import { BalanceWrapper } from './Balance.style';

const Balance = () => {
  const balance = useAppSelector((state) => state.clicker.balance);
  return <BalanceWrapper>${balance}</BalanceWrapper>;
};

export default Balance;
