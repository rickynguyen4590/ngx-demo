import { createAction, props } from '@ngrx/store';
import { ClaimEntity } from '@ng13/paris';

export const init = createAction('[Claim Page] Init');

export const loadClaims = createAction(
  '[Claim/API] Load Claim'
);


export const loadClaimSuccess = createAction(
  '[Claim/API] Load Claim Success',
  props<{ claim: ClaimEntity[] }>()
);

export const loadClaimFailure = createAction(
  '[Claim/API] Load Claim Failure',
  props<{ error: any }>()
);
