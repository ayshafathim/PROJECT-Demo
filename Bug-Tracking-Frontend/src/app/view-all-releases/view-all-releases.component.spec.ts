import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllReleasesComponent } from './view-all-releases.component';

describe('ViewAllReleasesComponent', () => {
  let component: ViewAllReleasesComponent;
  let fixture: ComponentFixture<ViewAllReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllReleasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
