import { EntityRepository, Repository } from 'typeorm';
import { FinancialInstitution } from '../entities/financial-institution.entity';

@EntityRepository(FinancialInstitution)
export class FinancialInstitutionRepository extends Repository<FinancialInstitution> {
  findAll() {
    return this.find();
  }
}
