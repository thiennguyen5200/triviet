import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotelUpdateComponent } from './motel-update.component';

describe('MotelUpdateComponent', () => {
  let component: MotelUpdateComponent;
  let fixture: ComponentFixture<MotelUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotelUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
