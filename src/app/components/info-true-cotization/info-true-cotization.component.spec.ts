import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTrueCotizationComponent } from './info-true-cotization.component';

describe('InfoTrueCotizationComponent', () => {
  let component: InfoTrueCotizationComponent;
  let fixture: ComponentFixture<InfoTrueCotizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTrueCotizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTrueCotizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
