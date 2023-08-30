import { MigrationInterface, QueryRunner } from "typeorm";

export class FightsWinner1693378046337 implements MigrationInterface {
    name = 'FightsWinner1693378046337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fight\` ADD \`winnerId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`fight\` ADD CONSTRAINT \`FK_bafc71189768827955608067eb9\` FOREIGN KEY (\`winnerId\`) REFERENCES \`fighter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fight\` DROP FOREIGN KEY \`FK_bafc71189768827955608067eb9\``);
        await queryRunner.query(`ALTER TABLE \`fight\` DROP COLUMN \`winnerId\``);
    }

}
