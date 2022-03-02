import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItem1SubComponent } from './product-item1-sub.component';

describe('ProductItem1SubComponent', () => {
  let component: ProductItem1SubComponent;
  let fixture: ComponentFixture<ProductItem1SubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItem1SubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItem1SubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
