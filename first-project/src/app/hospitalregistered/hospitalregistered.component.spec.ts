import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalregisteredComponent } from './hospitalregistered.component';

describe('HospitalregisteredComponent', () => {
  let component: HospitalregisteredComponent;
  let fixture: ComponentFixture<HospitalregisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalregisteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
