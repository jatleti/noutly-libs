import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NySeveritySelectorComponent } from './ny-severity-selector.component';

describe('NySeveritySelectorComponent', () => {
  let component: NySeveritySelectorComponent;
  let fixture: ComponentFixture<NySeveritySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NySeveritySelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NySeveritySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
