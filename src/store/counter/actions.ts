import { ActionHandler } from 'vuex';

import { RootState } from '@/store/rootModule';
import { CounterState } from '.';

import { getRandomInt } from '@/helpers/getRandomInt';

export const incrementRandomAsync: ActionHandler<CounterState, RootState> = async ({
    commit,
}): Promise<void> => {
    commit('setLoading', true);
    const value = await getRandomInt();
    commit('incrementBy', value);
    commit('setLoading', false);
};
