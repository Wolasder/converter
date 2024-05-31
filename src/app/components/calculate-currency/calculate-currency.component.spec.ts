import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CalculateCurrencyComponent} from './calculate-currency.component';

describe('CalculateCurrencyComponent', () => {
  let component: CalculateCurrencyComponent;
  let fixture: ComponentFixture<CalculateCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateCurrencyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculateCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
