import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueCotizationComponent } from './true-cotization.component';

describe('TrueCotizationComponent', () => {
  let component: TrueCotizationComponent;
  let fixture: ComponentFixture<TrueCotizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrueCotizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueCotizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
