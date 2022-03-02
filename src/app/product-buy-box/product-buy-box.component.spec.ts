import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBuyBoxComponent } from './product-buy-box.component';

describe('ProductBuyBoxComponent', () => {
  let component: ProductBuyBoxComponent;
  let fixture: ComponentFixture<ProductBuyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBuyBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBuyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
