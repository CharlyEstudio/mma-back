import { MigrationInterface, QueryRunner } from "typeorm";

export class Fights1693376929757 implements MigrationInterface {
    name = 'Fights1693376929757'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`fight\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fight\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`fighterAId\` int NULL, \`fighterBId\` int NULL, \`weightClassId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`fight\` ADD CONSTRAINT \`FK_0dd6e3fc4ebe8277be863334993\` FOREIGN KEY (\`fighterAId\`) REFERENCES \`fighter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fight\` ADD CONSTRAINT \`FK_b00cd9931d1152c1b16ac2936d9\` FOREIGN KEY (\`fighterBId\`) REFERENCES \`fighter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fight\` ADD CONSTRAINT \`FK_9109cc108d104622b40130ab7a0\` FOREIGN KEY (\`weightClassId\`) REFERENCES \`weight_classes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fight\` DROP FOREIGN KEY \`FK_9109cc108d104622b40130ab7a0\``);
        await queryRunner.query(`ALTER TABLE \`fight\` DROP FOREIGN KEY \`FK_b00cd9931d1152c1b16ac2936d9\``);
        await queryRunner.query(`ALTER TABLE \`fight\` DROP FOREIGN KEY \`FK_0dd6e3fc4ebe8277be863334993\``);
        await queryRunner.query(`DROP TABLE \`fight\``);
    }

}
