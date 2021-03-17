import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartmentListActionsComponent } from './department-list-actions.component';

describe('DepartmentListActionsComponent', () => {
  let component: DepartmentListActionsComponent;
  let fixture: ComponentFixture<DepartmentListActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartmentListActionsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
