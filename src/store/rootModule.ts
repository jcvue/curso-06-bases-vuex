import { Module } from 'vuex';

import { getRandomInt } from '@/helpers/getRandomInt';
export interface RootState {
    counter: number;
    lastMutation: string;
    loading: boolean;
    byValue: number;
}

export const rootModule: Module<RootState, unknown> = {
    namespaced: true,
    state: (): RootState => ({
        counter: 0,
        lastMutation: 'none',
        loading: false,
        byValue: 0,
    }),
    mutations: {
        increment(state: RootState): void {
            state.counter++;
            state.lastMutation = 'increment';
        },
        incrementBy(state: RootState, byValue: number): void {
            state.counter += byValue;
            state.byValue = byValue;
            state.lastMutation = `incrementBy: ${byValue}`;
        },
        decrement(state: RootState): void {
            state.counter--;
            state.lastMutation = 'decrement';
        },
        setLoading(state: RootState, loading: boolean): void {
            state.loading = loading;
            state.lastMutation = `setLoading(${loading})`;
        },
    },
    actions: {
        async incrementRandomAsync({ commit }) {
            commit('setLoading', true);
            const value = await getRandomInt();
            commit('incrementBy', value);
            commit('setLoading', false);
        },
    },
    getters: {
        squareCounter(state: RootState): number {
            return state.counter * state.counter;
        },
    },
};
