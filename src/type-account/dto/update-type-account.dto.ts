import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeAccountDto } from './create-type-account.dto';

export class UpdateTypeAccountDto extends PartialType(CreateTypeAccountDto) {}
