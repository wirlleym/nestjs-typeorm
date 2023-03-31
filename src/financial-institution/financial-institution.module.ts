import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialInstitutionService } from './financial-institution.service';
import { FinancialInstitutionController } from './financial-institution.controller';
import { FinancialInstitution } from './entities/financial-institution.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FinancialInstitution])],
  controllers: [FinancialInstitutionController],
  providers: [FinancialInstitutionService],
})
export class FinancialInstitutionModule {}
