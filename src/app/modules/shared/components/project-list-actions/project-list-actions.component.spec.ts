import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListActionsComponent } from './project-list-actions.component';

describe('ProjectListActionsComponent', () => {
  let component: ProjectListActionsComponent;
  let fixture: ComponentFixture<ProjectListActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectListActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
