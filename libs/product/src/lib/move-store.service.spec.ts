import { TestBed } from '@angular/core/testing';

import { MoveStoreService } from './move-store.service';

describe('MoveStoreService', () => {
  let service: MoveStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
