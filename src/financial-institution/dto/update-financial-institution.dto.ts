import { PartialType } from '@nestjs/mapped-types';
import { CreateFinancialInstitutionDto } from './create-financial-institution.dto';

export class UpdateFinancialInstitutionDto extends PartialType(CreateFinancialInstitutionDto) {}
