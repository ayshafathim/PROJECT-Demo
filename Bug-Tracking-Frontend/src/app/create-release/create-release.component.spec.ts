import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReleaseComponent } from './create-release.component';

describe('CreateReleaseComponent', () => {
  let component: CreateReleaseComponent;
  let fixture: ComponentFixture<CreateReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReleaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
