export class CreateAccountDto {
  amount: number;
  description: string;
  type_account_id: number;
  color: string;
  sum_initial_page: boolean;
  user_id: number;
  financial_institution_id: number;
  institution_type: string[];
}
