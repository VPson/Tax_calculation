import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateStock1642724663773 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'stocks',
                columns: [
                    {
                        name: 'id',
                        type: 'decimal(10,2)'
                    },
                    {
                        name: 'nameStock',
                        type: 'varchar'
                    },
                    {
                        name: 'quantitu',
                        type: 'decimal(10,2)'
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
                        type: 'decimal(10,2)'
                    },
                    {
                        name: 'valueSell',
                        type: 'decimal(10,2)'
                    },
                    {
                        name: 'total',
                        type: 'decimal(10,2)'
                    }
                ]
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('stocks');
    }

}
