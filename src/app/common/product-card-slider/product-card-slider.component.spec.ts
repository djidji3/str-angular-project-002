import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardSliderComponent } from './product-card-slider.component';

describe('ProductCardSliderComponent', () => {
  let component: ProductCardSliderComponent;
  let fixture: ComponentFixture<ProductCardSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
