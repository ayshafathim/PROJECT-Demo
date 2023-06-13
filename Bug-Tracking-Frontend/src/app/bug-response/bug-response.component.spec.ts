import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugResponseComponent } from './bug-response.component';

describe('BugResponseComponent', () => {
  let component: BugResponseComponent;
  let fixture: ComponentFixture<BugResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BugResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
