/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarpoolService } from './carpool.service';

describe('CarpoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarpoolService]
    });
  });

  it('should ...', inject([CarpoolService], (service: CarpoolService) => {
    expect(service).toBeTruthy();
  }));
});
