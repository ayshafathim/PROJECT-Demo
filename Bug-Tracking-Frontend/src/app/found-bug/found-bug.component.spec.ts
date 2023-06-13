import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundBugComponent } from './found-bug.component';

describe('FoundBugComponent', () => {
  let component: FoundBugComponent;
  let fixture: ComponentFixture<FoundBugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundBugComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
