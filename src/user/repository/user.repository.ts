import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByIdAndIsActive(id: number) {
    return this.findOneBy({ id });
  }
}
