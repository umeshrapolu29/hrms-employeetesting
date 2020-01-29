import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadpayslipsComponent } from './downloadpayslips.component';

describe('DownloadpayslipsComponent', () => {
  let component: DownloadpayslipsComponent;
  let fixture: ComponentFixture<DownloadpayslipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadpayslipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadpayslipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
