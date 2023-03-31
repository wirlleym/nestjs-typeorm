import { Injectable } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { CreateTypeAccountDto } from './dto/create-type-account.dto';
import { UpdateTypeAccountDto } from './dto/update-type-account.dto';
import { TypeAccountRepository } from './repository/type-account.repository';
import { TypeAccount } from './entities/type-account.entity';

@Injectable()
export class TypeAccountService {
  constructor(private typeAccountRepository: TypeAccountRepository) {}

  create(createTypeAccountDto: CreateTypeAccountDto) {
    const typeAccount = this.typeAccountRepository.create(createTypeAccountDto);
    return this.typeAccountRepository.save(typeAccount);
  }

  findAll(): Promise<TypeAccount[]> {
    return this.typeAccountRepository.find();
  }

  findOne(id: number): Promise<TypeAccount | null> {
    return this.typeAccountRepository.findOneBy({ id });
  }

  update(
    id: number,
    updateTypeAccountDto: UpdateTypeAccountDto,
  ): Promise<UpdateResult> {
    return this.typeAccountRepository.update({ id }, updateTypeAccountDto);
  }

  remove(id: number) {
    return this.typeAccountRepository.softDelete({ id });
  }
}
