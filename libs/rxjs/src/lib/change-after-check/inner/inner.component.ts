import {
  Component,
  Input,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'nv--inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss'],
})
export class InnerComponent implements OnChanges {
  @Input()
  loading = false;

  data = '123';

  ngOnChanges(): void {
    this.data = '456';
  }
}
