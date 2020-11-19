import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildReadComponent } from './build-read.component';

describe('BuildReadComponent', () => {
  let component: BuildReadComponent;
  let fixture: ComponentFixture<BuildReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
