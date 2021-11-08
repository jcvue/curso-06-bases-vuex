import { Module } from 'vuex';

import { RootState } from '../rootModule';
import state from './state';
import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

export interface CounterState {
    count: number;
    lastMutation: string;
    loading: boolean;
    byValue: number;
}

const counterStore: Module<CounterState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};

export default counterStore;
