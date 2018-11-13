import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlterarTagComponent } from './admin-alterar-tag.component';

describe('AdminAlterarTagComponent', () => {
  let component: AdminAlterarTagComponent;
  let fixture: ComponentFixture<AdminAlterarTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAlterarTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAlterarTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
