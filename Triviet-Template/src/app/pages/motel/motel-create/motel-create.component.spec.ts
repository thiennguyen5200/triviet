import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotelCreateComponent } from './motel-create.component';

describe('MotelCreateComponent', () => {
  let component: MotelCreateComponent;
  let fixture: ComponentFixture<MotelCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotelCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
