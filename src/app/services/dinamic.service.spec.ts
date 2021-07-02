import { TestBed } from '@angular/core/testing';

import { DinamicService } from './dinamic.service';

describe('DinamicService', () => {
  let service: DinamicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinamicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
