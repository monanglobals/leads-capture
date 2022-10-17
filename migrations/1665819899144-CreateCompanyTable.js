const { Table, TableIndex } = require('typeorm');

module.exports = class CreateCompanyTable1665819899144 {
  async up(queryRunner) {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: 'company',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'phone',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'activity',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'google_business_status',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'google_lat',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'google_lng',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_date',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_date',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      'company',
      new TableIndex({
        name: 'IDX_COMPANY_NAME',
        columnNames: ['name'],
      }),
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable('company');
    await queryRunner.dropIndex('company', 'IDX_COMPANY_NAME');
  }
};
