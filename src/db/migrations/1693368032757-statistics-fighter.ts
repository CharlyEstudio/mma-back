import { MigrationInterface, QueryRunner } from "typeorm";

export class StatisticsFighter1693368032757 implements MigrationInterface {
    name = 'StatisticsFighter1693368032757'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`statistic\` (\`id\` int NOT NULL AUTO_INCREMENT, \`wins\` int NOT NULL, \`loses\` int NOT NULL, \`knokcouts\` int NOT NULL, \`submissions\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fighter\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`statisticId\` int NULL, UNIQUE INDEX \`REL_11cded51f828278c92031f2db0\` (\`statisticId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`fighter\` ADD CONSTRAINT \`FK_11cded51f828278c92031f2db07\` FOREIGN KEY (\`statisticId\`) REFERENCES \`statistic\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fighter\` DROP FOREIGN KEY \`FK_11cded51f828278c92031f2db07\``);
        await queryRunner.query(`DROP INDEX \`REL_11cded51f828278c92031f2db0\` ON \`fighter\``);
        await queryRunner.query(`DROP TABLE \`fighter\``);
        await queryRunner.query(`DROP TABLE \`statistic\``);
    }

}
