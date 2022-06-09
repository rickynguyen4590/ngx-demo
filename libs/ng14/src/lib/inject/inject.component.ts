import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { injectDestroy$ } from '@nv/core';
import { interval, takeUntil } from 'rxjs';

@Component({
  standalone: true,
  selector: 'nv-inject',
  imports: [RouterModule],
  templateUrl: './inject.component.html',
  styleUrls: ['./inject.component.scss'],
})
export class InjectComponent implements OnInit {
  destroy$ = injectDestroy$();
  xx = interval(1000).pipe(takeUntil(this.destroy$)).subscribe(console.log);
  ngOnInit(): void {
  }
}
