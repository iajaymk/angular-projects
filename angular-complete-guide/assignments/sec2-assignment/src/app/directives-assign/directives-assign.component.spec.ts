import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAssignComponent } from './directives-assign.component';

describe('DirectivesAssignComponent', () => {
  let component: DirectivesAssignComponent;
  let fixture: ComponentFixture<DirectivesAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesAssignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
