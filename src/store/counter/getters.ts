import { CounterState } from './index';

export const squareCounter = (state: CounterState): number => {
    return state.count * state.count;
};
