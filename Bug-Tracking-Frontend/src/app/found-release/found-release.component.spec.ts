import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundReleaseComponent } from './found-release.component';

describe('FoundReleaseComponent', () => {
  let component: FoundReleaseComponent;
  let fixture: ComponentFixture<FoundReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundReleaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
