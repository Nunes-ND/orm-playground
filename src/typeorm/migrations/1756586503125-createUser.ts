import type { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1756586503125 implements MigrationInterface {
	name = 'CreateUser1756586503125';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
            CREATE TABLE "users" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "firstName" text NOT NULL,
                "lastName" text NOT NULL,
                "age" integer NOT NULL
            )
        `);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
            DROP TABLE "user"
        `);
	}
}
