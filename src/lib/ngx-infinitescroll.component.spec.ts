import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInfiniteScrollComponent } from './ngx-infinitescroll.component';

describe('NgxInfiniteScrollComponent', () => {
  let component: NgxInfiniteScrollComponent;
  let fixture: ComponentFixture<NgxInfiniteScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxInfiniteScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
