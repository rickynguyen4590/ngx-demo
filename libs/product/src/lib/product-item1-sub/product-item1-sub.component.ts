import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'nv-product-item1-sub',
  templateUrl: './product-item1-sub.component.html',
  styleUrls: ['./product-item1-sub.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItem1SubComponent implements OnInit {
  @Input() subs: any;

  constructor() {}

  ngOnInit(): void {}

  subCheck() {
    // console.log('subCheck');
    return '';
  }
}
