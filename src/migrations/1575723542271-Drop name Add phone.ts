import {MigrationInterface, QueryRunner} from "typeorm";

export class DropNameAddPhone1575723542271 implements MigrationInterface {
    name = 'DropNameAddPhone1575723542271'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `name` `phone` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `phone` `name` varchar(255) NOT NULL", undefined);
    }

}
