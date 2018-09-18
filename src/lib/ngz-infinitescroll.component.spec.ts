import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzInfiniteScrollComponent } from './ngz-infinitescroll.component';

describe('NgzInfiniteScrollComponent', () => {
  let component: NgzInfiniteScrollComponent;
  let fixture: ComponentFixture<NgzInfiniteScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgzInfiniteScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzInfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
