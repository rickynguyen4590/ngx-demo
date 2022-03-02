import { Injectable } from '@angular/core';
import { ClaimEntity, ClaimService } from '@ng13/paris';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import * as ClaimActions from './claim.actions';

@Injectable()
export class ClaimEffects {
  private _init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClaimActions.init),
      exhaustMap((action) => {
        return this.claimService.searchClaim().pipe(
          map((allClaim: ClaimEntity[]) => {
            return ClaimActions.loadClaimSuccess({ claim: allClaim });
          }),
          tap((e) => console.log(e)),
          catchError((error) => of(ClaimActions.loadClaimFailure({ error })))
        );
      })
    )
  );
  public get init$() {
    return this._init$;
  }
  public set init$(value) {
    this._init$ = value;
  }

  constructor(
    private readonly actions$: Actions,
    private readonly claimService: ClaimService
  ) {}
}
