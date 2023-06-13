import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchApplicationByNameComponent } from './search-application-by-name.component';

describe('SearchApplicationByNameComponent', () => {
  let component: SearchApplicationByNameComponent;
  let fixture: ComponentFixture<SearchApplicationByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchApplicationByNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchApplicationByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
