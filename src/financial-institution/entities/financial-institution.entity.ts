import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Account } from '../../account/entities/account.entity';

@Entity()
export class FinancialInstitution {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  logo: string;

  @Column()
  color: string;

  @OneToMany(() => Account, (account) => account.financial_institution)
  accounts: Account[];

  @Column()
  created_at: Date;

  @Column()
  update_at: Date;

  @Column()
  deleted_at: Date;
}
