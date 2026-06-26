import { TestBed } from '@angular/core/testing';

import { EmailValidadorService } from './email-validador.service';

describe('EmailValidadorService', () => {
  let service: EmailValidadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailValidadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
