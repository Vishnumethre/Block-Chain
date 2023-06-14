import { TestBed } from '@angular/core/testing';

import { DataPasserService } from './data-passer.service';

describe('DataPasserService', () => {
  let service: DataPasserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPasserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
