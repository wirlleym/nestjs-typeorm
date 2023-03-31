import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeAccountService } from './type-account.service';
import { CreateTypeAccountDto } from './dto/create-type-account.dto';
import { UpdateTypeAccountDto } from './dto/update-type-account.dto';

@Controller('type-account')
export class TypeAccountController {
  constructor(private readonly typeAccountService: TypeAccountService) {}

  @Post()
  create(@Body() createTypeAccountDto: CreateTypeAccountDto) {
    return this.typeAccountService.create(createTypeAccountDto);
  }

  @Get()
  findAll() {
    return this.typeAccountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeAccountService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypeAccountDto: UpdateTypeAccountDto,
  ) {
    return this.typeAccountService.update(+id, updateTypeAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeAccountService.remove(+id);
  }
}
