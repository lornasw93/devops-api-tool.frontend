import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterruptionsComponent } from './interruptions.component';

describe('InterruptionsComponent', () => {
  let component: InterruptionsComponent;
  let fixture: ComponentFixture<InterruptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterruptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterruptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
