import { Test, TestingModule } from '@nestjs/testing';
import { FinancialInstitutionService } from './financial-institution.service';

describe('FinancialInstitutionService', () => {
  let service: FinancialInstitutionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinancialInstitutionService],
    }).compile();

    service = module.get<FinancialInstitutionService>(FinancialInstitutionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
