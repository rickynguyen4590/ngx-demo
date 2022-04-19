import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'ng13-change-after-check',
  templateUrl: './change-after-check.component.html',
})
export class ChangeAfterCheckComponent
  implements AfterViewInit, OnChanges, OnInit
{
  loading = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true;
    }, 2000);
  }

  ngAfterViewInit(): void {
    this.loading = true;
  }

  ngOnChanges() {}
}
