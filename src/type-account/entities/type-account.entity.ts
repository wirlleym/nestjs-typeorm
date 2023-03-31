import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Account } from '../../account/entities/account.entity';

@Entity()
export class TypeAccount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  icon: string;

  @OneToMany(() => Account, (account) => account.type_account_id)
  accounts: Account[];

  @Column()
  created_at: Date;

  @Column()
  update_at: Date;

  @Column()
  deleted_at: Date;
}
