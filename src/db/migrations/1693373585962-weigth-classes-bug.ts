import { MigrationInterface, QueryRunner } from "typeorm";

export class WeigthClassesBug1693373585962 implements MigrationInterface {
    name = 'WeigthClassesBug1693373585962'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_3a111c71912d3ee7ae44ebc929\` ON \`fighter\``);
        await queryRunner.query(`ALTER TABLE \`weight_classes\` DROP COLUMN \`weight_class\``);
        await queryRunner.query(`ALTER TABLE \`weight_classes\` ADD \`weight_class\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`weight_classes\` DROP COLUMN \`weight_class\``);
        await queryRunner.query(`ALTER TABLE \`weight_classes\` ADD \`weight_class\` int NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_3a111c71912d3ee7ae44ebc929\` ON \`fighter\` (\`detailId\`)`);
    }

}
