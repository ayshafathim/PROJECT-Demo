import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBugByIdComponent } from './search-bug-by-id.component';

describe('SearchBugByIdComponent', () => {
  let component: SearchBugByIdComponent;
  let fixture: ComponentFixture<SearchBugByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBugByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBugByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
