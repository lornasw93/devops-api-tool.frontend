import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeploymentListActionsComponent } from "./deployment-list-actions.component";

describe('DepartmentListActionsComponent', () => {
  let component: DeploymentListActionsComponent;
  let fixture: ComponentFixture<DeploymentListActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeploymentListActionsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
