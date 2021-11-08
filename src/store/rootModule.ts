import { Module, ModuleTree } from 'vuex';

import counterStore from './counter';
export interface RootState {
    version: string;
}

const modules: ModuleTree<RootState> = {
    counter: counterStore,
};

const root: Module<RootState, RootState> = {
    state: (): RootState => ({
        version: '1.0.0',
    }),
    modules,
};

export default root;
