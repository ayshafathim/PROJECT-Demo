import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteResponseComponent } from './delete-response.component';

describe('DeleteResponseComponent', () => {
  let component: DeleteResponseComponent;
  let fixture: ComponentFixture<DeleteResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
