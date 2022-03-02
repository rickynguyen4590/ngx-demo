import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ClaimActions from './claim.actions';
import { ClaimEffects } from './claim.effects';

describe('ClaimEffects', () => {
  let actions: Observable<Action>;
  let effects: ClaimEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ClaimEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ClaimEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ClaimActions.init() });

      const expected = hot('-a-|', {
        a: ClaimActions.loadClaimSuccess({ claim: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
