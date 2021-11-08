import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

import root, { RootState } from './rootModule';

export const storeKey: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>(root);

export function useStore(): Store<RootState> {
    return baseUseStore(storeKey);
}
