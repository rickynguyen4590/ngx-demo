import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CLAIM_FEATURE_KEY, State, claimAdapter } from './claim.reducer';

// Lookup the 'Claim' feature state managed by NgRx
export const getClaimState = createFeatureSelector<State>(CLAIM_FEATURE_KEY);

const { selectAll, selectEntities } = claimAdapter.getSelectors();

export const getClaimLoaded = createSelector(
  getClaimState,
  (state: State) => state.loaded
);

export const getClaimError = createSelector(
  getClaimState,
  (state: State) => state.error
);

export const getAllClaim = createSelector(getClaimState, (state: State) =>
  selectAll(state)
);

export const getClaimEntities = createSelector(getClaimState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getClaimState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getClaimEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
