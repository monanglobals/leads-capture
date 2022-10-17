const { Table, TableForeignKey } = require('typeorm');

module.exports = class CreateLeadTable1665820607875 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'lead',
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
            name: 'company_id',
            type: 'uuid',
            isNullable: false,
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
            name: 'phone_type',
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

    await queryRunner.createForeignKey(
      'lead',
      new TableForeignKey({
        name: 'FGK_COMPANY_LEAD_ID',
        columnNames: ['company_id'],
        referencedTableName: 'company',
        referencedColumnNames: ['id'],
      }),
    );
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey('lead', 'FGK_COMPANY_LEAD_ID');
    await queryRunner.dropTable('lead');
  }
};
