import { TestBed } from '@angular/core/testing';

import { SecurdataService } from './securdata.service';

describe('SecurdataService', () => {
  let service: SecurdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
