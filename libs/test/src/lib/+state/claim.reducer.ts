import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ClaimActions from './claim.actions';
import { ClaimEntity } from '@ng13/paris';

export const CLAIM_FEATURE_KEY = 'claim';

export interface State extends EntityState<ClaimEntity> {
  selectedId?: string | number; // which Claim record has been selected
  loaded: boolean; // has the Claim list been loaded
  error?: string | null; // last known error (if any)
}

export interface ClaimPartialState {
  readonly [CLAIM_FEATURE_KEY]: State;
}

export const claimAdapter: EntityAdapter<ClaimEntity> =
  createEntityAdapter<ClaimEntity>();

export const initialState: State = claimAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const claimReducer = createReducer(
  initialState,
  on(ClaimActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ClaimActions.loadClaimSuccess, (state, { claim }) => {
    return claimAdapter.setAll(claim, { ...state, loaded: true });
  }),
  on(ClaimActions.loadClaimFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return claimReducer(state, action);
}
