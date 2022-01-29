import {MigrationInterface, QueryRunner, TableColumn} from 'typeorm';

export class AddColumnOperationType1643473876726 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('operations', new TableColumn({
            name: 'type', 
            type: 'varchar'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('operations', 'type');
    }

}
