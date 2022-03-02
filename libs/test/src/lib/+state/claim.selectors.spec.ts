import { ClaimEntity } from '../../../../paris/src/lib/claim.models';
import { claimAdapter, ClaimPartialState, initialState } from './claim.reducer';
import * as ClaimSelectors from './claim.selectors';

describe('Claim Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getClaimId = (it: ClaimEntity) => it.id;
  const createClaimEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ClaimEntity);

  let state: ClaimPartialState;

  beforeEach(() => {
    state = {
      claim: claimAdapter.setAll(
        [
          createClaimEntity('PRODUCT-AAA'),
          createClaimEntity('PRODUCT-BBB'),
          createClaimEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Claim Selectors', () => {
    it('getAllClaim() should return the list of Claim', () => {
      const results = ClaimSelectors.getAllClaim(state);
      const selId = getClaimId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ClaimSelectors.getSelected(state) as ClaimEntity;
      const selId = getClaimId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getClaimLoaded() should return the current "loaded" status', () => {
      const result = ClaimSelectors.getClaimLoaded(state);

      expect(result).toBe(true);
    });

    it('getClaimError() should return the current "error" state', () => {
      const result = ClaimSelectors.getClaimError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
