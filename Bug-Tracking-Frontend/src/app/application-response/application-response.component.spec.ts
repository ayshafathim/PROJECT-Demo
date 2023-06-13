import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationResponseComponent } from './application-response.component';

describe('ApplicationResponseComponent', () => {
  let component: ApplicationResponseComponent;
  let fixture: ComponentFixture<ApplicationResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
