import { TestBed, inject } from '@angular/core/testing';

import { NgxInfiniteScrollService } from './ngx-infinitescroll.service';

describe('NgxInfiniteScrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxInfiniteScrollService]
    });
  });

  it('should be created', inject([NgxInfiniteScrollService], (service: NgxInfiniteScrollService) => {
    expect(service).toBeTruthy();
  }));
});
