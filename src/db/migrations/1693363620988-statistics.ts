import { MigrationInterface, QueryRunner } from "typeorm";

export class Statistics1693363620988 implements MigrationInterface {
    name = 'Statistics1693363620988'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`statistic\` (\`id\` int NOT NULL AUTO_INCREMENT, \`wins\` int NOT NULL, \`loses\` int NOT NULL, \`knokcouts\` int NOT NULL, \`submissions\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`statistic\``);
    }

}
