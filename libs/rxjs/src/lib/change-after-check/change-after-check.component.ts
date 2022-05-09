import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'ng13-change-after-check',
  templateUrl: './change-after-check.component.html',
})
export class ChangeAfterCheckComponent implements AfterViewInit {
  loading = false;

  ngAfterViewInit(): void {
    this.loading = true;
  }
}
