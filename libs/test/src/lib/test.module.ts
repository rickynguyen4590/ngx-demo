import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TabViewModule } from 'primeng/tabview';
import { ClaimEffects } from './+state/claim.effects';
import * as fromClaim from './+state/claim.reducer';
import { SearchClaimComponent } from './search-claim/search-claim.component';
import { TestRoutingModule } from './test-routing.module';
import { Content1Component } from './tab/content1/content1.component';
import { Content2Component } from './tab/content2/content2.component';
import { Content3Component } from './tab/content3/content3.component';

@NgModule({
  imports: [
    CommonModule,
    TabViewModule,
    TestRoutingModule,
    StoreModule.forFeature(fromClaim.CLAIM_FEATURE_KEY, fromClaim.reducer),
    EffectsModule.forFeature([ClaimEffects]),
  ],
  providers: [],
  declarations: [SearchClaimComponent, Content1Component, Content2Component, Content3Component],
})
export class TestModule {}
