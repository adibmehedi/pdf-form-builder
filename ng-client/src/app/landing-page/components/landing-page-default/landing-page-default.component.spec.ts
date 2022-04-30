import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageDefaultComponent } from './landing-page-default.component';

describe('LandingPageDefaultComponent', () => {
  let component: LandingPageDefaultComponent;
  let fixture: ComponentFixture<LandingPageDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
