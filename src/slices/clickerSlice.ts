/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clickers, upgrades } from 'data/data';
import { AppDispatch } from 'store/store';

export type clicker = {
  name: string;
  lvl: number;
  upgrade: number;
  time: number;
  reward: number;
  working: boolean;
};

export type upgrade = {
  name: string;
  clicker: string;
  multiplayer: number;
  owned: boolean;
  price: number;
};

interface IInitialState {
  balance: number;
  clickers: clicker[];
  upgrades: upgrade[];
}

const initialState: IInitialState = {
  balance: 0,
  clickers,
  upgrades,
};

export const clickerSlice = createSlice({
  name: 'clicker',
  initialState,
  reducers: {
    incrementBalance: (state, action: PayloadAction<clicker>) => {
      const index = state.clickers.findIndex((item) => item.name === action.payload.name);
      if (state.clickers[index].lvl > 0) {
        state.balance += Math.floor(state.clickers[index].reward);
        state.clickers[index].working = !state.clickers[index].working;
      }
    },
    lvlup: (state, action: PayloadAction<clicker>) => {
      const index = state.clickers.findIndex((item) => item.name === action.payload.name);
      if (state.balance >= state.clickers[index].upgrade) {
        state.balance -= Math.floor(state.clickers[index].upgrade);
        state.clickers[index].lvl += 1;
        if (state.clickers[index].lvl % 10 === 0) state.clickers[index].time /= 1.5;
        state.clickers[index].reward *= 1.2;
        state.clickers[index].upgrade *= 1.2;
      }
    },
    changeWorkingState: (state, action: PayloadAction<clicker>) => {
      const index = state.clickers.findIndex((item) => item.name === action.payload.name);
      if (state.clickers[index].working === false && state.clickers[index].lvl > 0) {
        state.clickers[index].working = !state.clickers[index].working;
      }
    },
    upgradeClicker: (state, action: PayloadAction<upgrade>) => {
      if (state.balance >= action.payload.price) {
        const index = state.upgrades.findIndex((item) => item.name === action.payload.name);
        const clickerIndex = state.clickers.findIndex((item) => item.name === state.upgrades[index].clicker);
        state.clickers[clickerIndex].reward *= state.upgrades[index].multiplayer;
        state.upgrades[index].owned = !state.upgrades[index].owned;
      }
    },
  },
});

export const incrementAsync = (x: clicker) => (dispatch: AppDispatch) => {
  if (!x.working) {
    dispatch(changeWorkingState(x));
    setTimeout(() => {
      dispatch(incrementBalance(x));
    }, x.time);
  }
};

export const { incrementBalance, lvlup, changeWorkingState, upgradeClicker } = clickerSlice.actions;

export default clickerSlice.reducer;
