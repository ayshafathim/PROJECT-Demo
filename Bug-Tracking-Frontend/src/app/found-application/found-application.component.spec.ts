import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundApplicationComponent } from './found-application.component';

describe('FoundApplicationComponent', () => {
  let component: FoundApplicationComponent;
  let fixture: ComponentFixture<FoundApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
