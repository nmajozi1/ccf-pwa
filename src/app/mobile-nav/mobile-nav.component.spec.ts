import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileNavComponent } from './mobile-nav.component';

describe('MobileNavComponent', () => {
  let component: MobileNavComponent;
  let fixture: ComponentFixture<MobileNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
