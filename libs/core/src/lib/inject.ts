import { ChangeDetectorRef, inject, ViewRef } from '@angular/core';
import { Subject } from 'rxjs';

export function injectDestroy$() {
  const destroy$ = new Subject<boolean>();
  const ref = inject(ChangeDetectorRef) as ViewRef;
  ref.onDestroy(() => {
    console.log('xxx');
    destroy$.next(true);
    destroy$.complete();
  });

  return destroy$;
}
