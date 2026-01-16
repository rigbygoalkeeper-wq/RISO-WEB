import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Risowheel } from './risowheel';

describe('Risowheel', () => {
  let component: Risowheel;
  let fixture: ComponentFixture<Risowheel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Risowheel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Risowheel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
