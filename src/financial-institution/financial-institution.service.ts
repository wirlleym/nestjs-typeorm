import { Injectable } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { CreateFinancialInstitutionDto } from './dto/create-financial-institution.dto';
import { UpdateFinancialInstitutionDto } from './dto/update-financial-institution.dto';
import { FinancialInstitutionRepository } from './repository/financial-institution.repository';
import { FinancialInstitution } from './entities/financial-institution.entity';

@Injectable()
export class FinancialInstitutionService {
  constructor(
    private financialInstitutionRepository: FinancialInstitutionRepository,
  ) {}

  create(createFinancialInstitutionDto: CreateFinancialInstitutionDto) {
    const financialInstitution = this.financialInstitutionRepository.create(
      createFinancialInstitutionDto,
    );
    return this.financialInstitutionRepository.save(financialInstitution);
  }

  findAll(): Promise<FinancialInstitution[]> {
    return this.financialInstitutionRepository.find();
  }

  findOne(id: number): Promise<FinancialInstitution | null> {
    return this.financialInstitutionRepository.findOneBy({ id });
  }

  update(
    id: number,
    updateFinancialInstitutionDto: UpdateFinancialInstitutionDto,
  ): Promise<UpdateResult> {
    return this.financialInstitutionRepository.update(
      { id },
      updateFinancialInstitutionDto,
    );
  }

  remove(id: number) {
    return this.financialInstitutionRepository.softDelete({ id });
  }
}
