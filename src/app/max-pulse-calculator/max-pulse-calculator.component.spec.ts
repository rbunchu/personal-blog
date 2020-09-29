import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxPulseCalculatorComponent } from './max-pulse-calculator.component';

describe('MaxPulseCalculatorComponent', () => {
  let component: MaxPulseCalculatorComponent;
  let fixture: ComponentFixture<MaxPulseCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxPulseCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxPulseCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
