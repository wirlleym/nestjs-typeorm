import { Account } from '../entities/account.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Account)
export class AccountRepository extends Repository<Account> {
  findAll() {
    return this.find();
  }
}
