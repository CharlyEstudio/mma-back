import { MigrationInterface, QueryRunner } from "typeorm";

export class WeightClasses1693370380625 implements MigrationInterface {
    name = 'WeightClasses1693370380625'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`weight_classes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`weight_class\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`weight_classes\``);
    }

}
