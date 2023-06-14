import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStudentInfoComponent } from './teacher-student-info.component';

describe('TeacherStudentInfoComponent', () => {
  let component: TeacherStudentInfoComponent;
  let fixture: ComponentFixture<TeacherStudentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherStudentInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherStudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
