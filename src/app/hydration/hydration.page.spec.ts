import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HydrationPage } from './hydration.page';

describe('HydrationPage', () => {
  let component: HydrationPage;
  let fixture: ComponentFixture<HydrationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HydrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
