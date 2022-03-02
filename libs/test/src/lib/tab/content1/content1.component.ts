import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClaimEntity } from '@ng13/paris';
import { Dictionary } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { init } from '../../+state/claim.actions';
import { getClaimEntities } from '../../+state/claim.selectors';

@Component({

  selector: 'ng13-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.scss'],
})
export class Content1Component implements OnInit, OnDestroy {
  allClaims$: Observable<Dictionary<ClaimEntity>>;
  constructor(private store: Store) {
    this.allClaims$ = this.store.select(getClaimEntities);
  }

  ngOnDestroy(): void {
    console.log('Content 1 destroy');
  }

  ngOnInit(): void {
    console.log('Content 1 Init');
    this.store.dispatch(init());
  }
}
