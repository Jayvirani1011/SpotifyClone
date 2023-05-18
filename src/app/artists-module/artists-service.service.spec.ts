import { TestBed } from '@angular/core/testing';

import { ArtistsServiceService } from './artists-service.service';

describe('ArtistsServiceService', () => {
  let service: ArtistsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
