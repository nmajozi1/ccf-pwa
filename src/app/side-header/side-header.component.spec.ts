import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SideHeaderComponent } from './side-header.component';

describe('SideHeaderComponent', () => {
  let component: SideHeaderComponent;
  let fixture: ComponentFixture<SideHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SideHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
