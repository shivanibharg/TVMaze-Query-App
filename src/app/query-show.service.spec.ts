import { TestBed } from '@angular/core/testing';

import { QueryShowService } from './query-show.service';

describe('QueryShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryShowService = TestBed.get(QueryShowService);
    expect(service).toBeTruthy();
  });
});
