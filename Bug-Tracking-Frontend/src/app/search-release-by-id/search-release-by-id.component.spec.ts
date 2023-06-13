import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReleaseByIdComponent } from './search-release-by-id.component';

describe('SearchReleaseByIdComponent', () => {
  let component: SearchReleaseByIdComponent;
  let fixture: ComponentFixture<SearchReleaseByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchReleaseByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchReleaseByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
