import { Action } from '@ngrx/store';

import * as ClaimActions from './claim.actions';
import { ClaimEntity } from '../../../../paris/src/lib/claim.models';
import { State, initialState, reducer } from './claim.reducer';

describe('Claim Reducer', () => {
  const createClaimEntity = (id: string, name = ''): ClaimEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Claim actions', () => {
    it('loadClaimSuccess should return the list of known Claim', () => {
      const claim = [
        createClaimEntity('PRODUCT-AAA'),
        createClaimEntity('PRODUCT-zzz'),
      ];
      const action = ClaimActions.loadClaimSuccess({ claim });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
