import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildListActionsComponent } from './build-list-actions.component';

describe('BuildListActionsComponent', () => {
  let component: BuildListActionsComponent;
  let fixture: ComponentFixture<BuildListActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildListActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
