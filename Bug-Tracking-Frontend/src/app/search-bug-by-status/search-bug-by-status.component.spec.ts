import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBugByStatusComponent } from './search-bug-by-status.component';

describe('SearchBugByStatusComponent', () => {
  let component: SearchBugByStatusComponent;
  let fixture: ComponentFixture<SearchBugByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBugByStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBugByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
