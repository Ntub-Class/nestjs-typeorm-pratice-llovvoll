import {MigrationInterface, QueryRunner} from "typeorm";

export class AddAddress1575723453292 implements MigrationInterface {
    name = 'AddAddress1575723453292'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `address` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `address`", undefined);
    }

}
