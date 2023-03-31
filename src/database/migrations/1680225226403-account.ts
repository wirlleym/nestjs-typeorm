import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class account1680225226403 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'type_accounts',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'amount',
            type: 'decimal',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'type_account_id',
            type: 'bigint',
          },
          {
            name: 'color',
            type: 'varchar',
          },
          {
            name: 'sum_initial_page',
            type: 'smallint',
          },
          {
            name: 'user_id',
            type: 'bigint',
          },
          {
            name: 'financial_institution_id',
            type: 'bigint',
          },
          {
            name: 'institution_type',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('answer');
  }
}
