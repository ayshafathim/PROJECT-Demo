import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchApplicationByIdComponent } from './search-application-by-id.component';

describe('SearchApplicationByIdComponent', () => {
  let component: SearchApplicationByIdComponent;
  let fixture: ComponentFixture<SearchApplicationByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchApplicationByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchApplicationByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
