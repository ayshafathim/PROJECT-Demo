import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseResponseComponent } from './release-response.component';

describe('ReleaseResponseComponent', () => {
  let component: ReleaseResponseComponent;
  let fixture: ComponentFixture<ReleaseResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
