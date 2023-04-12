import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiChartTimerComponent } from './pi-chart-timer.component';

describe('PiChartTimerComponent', () => {
  let component: PiChartTimerComponent;
  let fixture: ComponentFixture<PiChartTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiChartTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiChartTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
