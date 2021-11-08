import { CounterState } from '.';

export const increment = (state: CounterState): void => {
    state.count++;
    state.lastMutation = 'increment';
};
export const incrementBy = (state: CounterState, byValue: number): void => {
    state.count += byValue;
    state.byValue = byValue;
    state.lastMutation = `incrementBy: ${byValue}`;
};
export const decrement = (state: CounterState): void => {
    state.count--;
    state.lastMutation = 'decrement';
};
export const setLoading = (state: CounterState, loading: boolean): void => {
    state.loading = loading;
    state.lastMutation = `setLoading(${loading})`;
};
