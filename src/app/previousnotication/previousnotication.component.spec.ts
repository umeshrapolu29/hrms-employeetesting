import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousnoticationComponent } from './previousnotication.component';

describe('PreviousnoticationComponent', () => {
  let component: PreviousnoticationComponent;
  let fixture: ComponentFixture<PreviousnoticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousnoticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousnoticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
