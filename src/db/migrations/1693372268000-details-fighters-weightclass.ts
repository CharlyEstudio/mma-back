import { MigrationInterface, QueryRunner } from "typeorm";

export class DetailsFightersWeightclass1693372268000 implements MigrationInterface {
    name = 'DetailsFightersWeightclass1693372268000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`detail\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nationality\` varchar(255) NOT NULL, \`team\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`weightClassId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`fighter\` ADD \`detailId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`fighter\` ADD UNIQUE INDEX \`IDX_3a111c71912d3ee7ae44ebc929\` (\`detailId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_3a111c71912d3ee7ae44ebc929\` ON \`fighter\` (\`detailId\`)`);
        await queryRunner.query(`ALTER TABLE \`fighter\` ADD CONSTRAINT \`FK_3a111c71912d3ee7ae44ebc9290\` FOREIGN KEY (\`detailId\`) REFERENCES \`detail\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`detail\` ADD CONSTRAINT \`FK_770a00cdc78b7f8f621fd228341\` FOREIGN KEY (\`weightClassId\`) REFERENCES \`weight_classes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`detail\` DROP FOREIGN KEY \`FK_770a00cdc78b7f8f621fd228341\``);
        await queryRunner.query(`ALTER TABLE \`fighter\` DROP FOREIGN KEY \`FK_3a111c71912d3ee7ae44ebc9290\``);
        await queryRunner.query(`DROP INDEX \`REL_3a111c71912d3ee7ae44ebc929\` ON \`fighter\``);
        await queryRunner.query(`ALTER TABLE \`fighter\` DROP INDEX \`IDX_3a111c71912d3ee7ae44ebc929\``);
        await queryRunner.query(`ALTER TABLE \`fighter\` DROP COLUMN \`detailId\``);
        await queryRunner.query(`DROP TABLE \`detail\``);
    }

}
