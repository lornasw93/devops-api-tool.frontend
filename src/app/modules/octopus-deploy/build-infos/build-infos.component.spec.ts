import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildInfosComponent } from './build-infos.component';

describe('BuildInfosComponent', () => {
  let component: BuildInfosComponent;
  let fixture: ComponentFixture<BuildInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
