import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinancialInstitutionService } from './financial-institution.service';
import { CreateFinancialInstitutionDto } from './dto/create-financial-institution.dto';
import { UpdateFinancialInstitutionDto } from './dto/update-financial-institution.dto';

@Controller('financial-institution')
export class FinancialInstitutionController {
  constructor(private readonly financialInstitutionService: FinancialInstitutionService) {}

  @Post()
  create(@Body() createFinancialInstitutionDto: CreateFinancialInstitutionDto) {
    return this.financialInstitutionService.create(createFinancialInstitutionDto);
  }

  @Get()
  findAll() {
    return this.financialInstitutionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financialInstitutionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinancialInstitutionDto: UpdateFinancialInstitutionDto) {
    return this.financialInstitutionService.update(+id, updateFinancialInstitutionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financialInstitutionService.remove(+id);
  }
}
