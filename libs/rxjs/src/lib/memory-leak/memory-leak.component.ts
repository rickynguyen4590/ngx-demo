import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of, switchMap, interval } from 'rxjs';

@Component({
  selector: 'ng13-memory-leak',
  templateUrl: './memory-leak.component.html',
})
export class MemoryLeakComponent implements OnInit {
  index = 1;
  timmer$ = interval(1000);
  myNumber$ = new BehaviorSubject<number>(this.index);

  ngOnInit() {
    this.timmer$
      .pipe(switchMap((x) => this.myNumber$))
      .subscribe((x) => console.log(x));
  }
}
