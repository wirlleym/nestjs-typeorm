import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TypeAccount } from '../../type-account/entities/type-account.entity';
import { User } from '../../user/entities/user.entity';
import { FinancialInstitution } from '../../financial-institution/entities/financial-institution.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column()
  description: string;

  @ManyToOne(() => TypeAccount, (type_account) => type_account.accounts)
  type_account: TypeAccount;

  @Column()
  color: string;

  @Column()
  sum_initial_page: boolean;

  @ManyToOne(() => User, (user) => user.accounts)
  user: User;

  @ManyToOne(
    () => FinancialInstitution,
    (financial_institution) => financial_institution.accounts,
  )
  financial_institution: FinancialInstitution;

  @Column()
  user_id: number;

  @Column()
  type_account_id: number;

  @Column()
  financial_institution_id: number;

  @Column()
  institution_type: string;

  @Column()
  created_at: Date;

  @Column()
  update_at: Date;

  @Column()
  deleted_at: Date;
}
