import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalvacantComponent } from './hospitalvacant.component';

describe('HospitalvacantComponent', () => {
  let component: HospitalvacantComponent;
  let fixture: ComponentFixture<HospitalvacantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalvacantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalvacantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
