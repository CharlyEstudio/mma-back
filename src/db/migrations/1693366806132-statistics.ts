import { MigrationInterface, QueryRunner } from "typeorm";

export class Statistics1693366806132 implements MigrationInterface {
    name = 'Statistics1693366806132'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`statistic\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_fighter\` int NOT NULL, \`wins\` int NOT NULL, \`loses\` int NOT NULL, \`knokcouts\` int NOT NULL, \`submissions\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`statistic\``);
    }

}
