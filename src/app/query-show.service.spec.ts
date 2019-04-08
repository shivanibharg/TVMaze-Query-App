import { TestBed } from '@angular/core/testing';

import { QueryShowService } from './query-show.service';
import { HttpClientModule } from '@angular/common/http';

describe('QueryShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: QueryShowService = TestBed.get(QueryShowService);
    expect(service).toBeTruthy();
  });
});
