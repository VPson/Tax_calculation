import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateOperations1643118265514 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'operations',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'nameStock',
                        type: 'varchar'
                    },
                    {
                        name: 'quantity',
                        type: 'integer'
                    },
                    {
                        name: 'dateBuy',
                        type: 'date'
                    },
                    {
                        name: 'dateSell',
                        type: 'date'
                    },
                    {
                        name: 'valueBuy',
                        type: 'decimal(19,2)'
                    },
                    {
                        name: 'valueSell',
                        type: 'decimal(19,2)'
                    },
                    {
                        name: 'fees',
                        type: 'decimal(19,2)'
                    },
                    {
                        name: 'total',
                        type: 'decimal(19,2)'
                    },
                    {
                        name: 'user_id',
                        type: 'varchar'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('operations');
    }

}
