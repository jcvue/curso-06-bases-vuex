import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

import { rootModule, RootState } from './rootModule';

export interface State {
    root: RootState;
}

export const storeKey: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    modules: {
        root: rootModule,
    },
});

export function useStore(): Store<State> {
    return baseUseStore(storeKey);
}
