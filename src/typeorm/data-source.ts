import { DataSource, type DataSourceOptions } from 'typeorm';

const dataSourceOptions: DataSourceOptions = {
	type: 'better-sqlite3',
	database: String(process.env.DB_FILE),
	entities: [`${__dirname}/entities/*.ts`],
	migrations: [`${__dirname}/migrations/*.ts`],
	subscribers: [`${__dirname}/subscribers/*.ts`],
	synchronize: Boolean(process.env.NODE_ENV === 'development'),
	logging: Boolean(process.env.NODE_ENV === 'development'),
};

export const dataSource = new DataSource(dataSourceOptions);
