import Database from 'better-sqlite3';
import {
	type BetterSQLite3Database,
	drizzle,
} from 'drizzle-orm/better-sqlite3';

const sqlite = new Database(process.env.DB_FILE_NAME);
export const dbClient: BetterSQLite3Database = drizzle({ client: sqlite });

export const db = drizzle({ connection: { source: process.env.DB_FILE_NAME } });
