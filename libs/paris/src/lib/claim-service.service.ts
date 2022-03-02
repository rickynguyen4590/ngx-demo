import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClaimEntity } from './claim.models';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  public searchClaim(): Observable<ClaimEntity[]> {
    return of([
      {
        id: 1,
        name: 'Claim 1',
      },
      {
        id: 2,
        name: 'Claim 2',
      },
    ]);
  }
}
