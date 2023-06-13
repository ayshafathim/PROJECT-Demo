import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBugsComponent } from './view-all-bugs.component';

describe('ViewAllBugsComponent', () => {
  let component: ViewAllBugsComponent;
  let fixture: ComponentFixture<ViewAllBugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllBugsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
