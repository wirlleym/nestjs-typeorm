import { EntityRepository, Repository } from 'typeorm';
import { TypeAccount } from '../entities/type-account.entity';

@EntityRepository(TypeAccount)
export class TypeAccountRepository extends Repository<TypeAccount> {
  findAll() {
    return this.find();
  }
}
