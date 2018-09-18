import { TestBed, inject } from '@angular/core/testing';

import { NgzInfiniteScrollService } from './ngz-infinitescroll.service';

describe('NgzInfiniteScrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgzInfiniteScrollService]
    });
  });

  it('should be created', inject([NgzInfiniteScrollService], (service: NgzInfiniteScrollService) => {
    expect(service).toBeTruthy();
  }));
});
