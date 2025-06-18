import { useStore as baseUseStore } from 'vuex';
import type { Store } from 'vuex';
import type { RootState } from './types';

export const useStore = (): Store<RootState> => baseUseStore();
