import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAdminTypeComponent } from './show-admin-type.component';

describe('ShowAdminTypeComponent', () => {
  let component: ShowAdminTypeComponent;
  let fixture: ComponentFixture<ShowAdminTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAdminTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAdminTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
