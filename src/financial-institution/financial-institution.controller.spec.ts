import { Test, TestingModule } from '@nestjs/testing';
import { FinancialInstitutionController } from './financial-institution.controller';
import { FinancialInstitutionService } from './financial-institution.service';

describe('FinancialInstitutionController', () => {
  let controller: FinancialInstitutionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancialInstitutionController],
      providers: [FinancialInstitutionService],
    }).compile();

    controller = module.get<FinancialInstitutionController>(FinancialInstitutionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
