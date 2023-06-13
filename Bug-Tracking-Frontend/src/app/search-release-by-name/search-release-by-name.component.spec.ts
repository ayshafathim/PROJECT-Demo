import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReleaseByNameComponent } from './search-release-by-name.component';

describe('SearchReleaseByNameComponent', () => {
  let component: SearchReleaseByNameComponent;
  let fixture: ComponentFixture<SearchReleaseByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchReleaseByNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchReleaseByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
