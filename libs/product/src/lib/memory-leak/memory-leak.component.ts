import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'ng13-memory-leak',
  templateUrl: './memory-leak.component.html',
  styleUrls: ['./memory-leak.component.scss'],
})
export class MemoryLeakComponent implements AfterViewInit {
  loading = false;

  ngAfterViewInit(): void {
    this.loading = true;
  }
}
