import { TestBed } from '@angular/core/testing';

import { SneaksService } from './sneaks.service';

describe('SneaksService', () => {
  let service: SneaksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SneaksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
