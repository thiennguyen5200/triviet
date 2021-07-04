import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotelDetailsComponent } from './motel-details.component';

describe('MotelDetailsComponent', () => {
  let component: MotelDetailsComponent;
  let fixture: ComponentFixture<MotelDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotelDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
