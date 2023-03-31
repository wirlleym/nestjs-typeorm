import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AccountRepository } from './repository/account.repository';
import { Account } from './entities/account.entity';
import { UpdateResult } from 'typeorm';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AccountService {
  constructor(private accountRepository: AccountRepository) {}

  create(createAccountDto: CreateAccountDto) {
    const { institution_type, ...accountDto } = createAccountDto;
    const account = this.accountRepository.create({
      ...accountDto,
      institution_type: institution_type.join(','),
    });
    return this.accountRepository.save(account);
  }

  async findAll(): Promise<any[]> {
    return (await this.accountRepository.find()).map((account) => ({
      ...account,
      institution_type: account.institution_type.split(','),
    }));
  }

  async findOne(id: number): Promise<any | null> {
    const account = await this.accountRepository.findOneBy({ id });
    return {
      ...account,
      institution_type: account.institution_type.split(','),
    };
  }

  update(
    id: number,
    user: User,
    updateAccountDto: UpdateAccountDto,
  ): Promise<UpdateResult> {
    const { institution_type, amount, ...accountDto } = updateAccountDto;
    return this.accountRepository.update(
      { id },
      {
        ...accountDto,
        amount,
        user_id: user.id,
        institution_type: institution_type.join(','),
      },
    );
  }

  remove(id: number) {
    return this.accountRepository.softDelete({ id });
  }
}
