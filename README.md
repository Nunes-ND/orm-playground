# ORM Playground

This project is a "playground" or Proof of Concept (PoC) developed to explore the setup and usage of different Object-Relational Mappers (ORMs) in the Node.js ecosystem. The initial exploration focuses on [TypeORM](https://typeorm.io/).

The goal is to create a simple and functional testing environment to understand workflows, from the initial setup and database connection to entity creation and migration management.

## Technologies Used

-   Node.js
-   TypeScript
-   TypeORM
-   tsx (for running TypeScript in real-time during development)
-   better-sqlite3 (SQLite database driver)
-   Biome (for formatting and linting)
-   Husky (para Git hooks)

## Getting Started

1.  Clone the repository.
2.  Install the dependencies:
    ```bash
    npm install
    ```

## TypeORM Scripts

The scripts in the `package.json` file facilitate interaction with the TypeORM CLI during development. They use `tsx` to execute TypeScript commands directly.

### Schema Management (Synchronization)

**Warning:** Synchronization commands are useful for rapid development but are **not recommended for production** as they can cause data loss. The ideal workflow for production uses migrations.

-   `npm run typeorm:schema:sync`: Synchronizes the database schema with your entities. It creates/alters tables to match the entity classes.
-   `npm run typeorm:schema:log`: Displays the SQL queries that the `schema:sync` command would execute in the console, without actually applying them. Useful for previewing changes.
-   `npm run typeorm:schema:drop`: Drops all tables in the database. **Use with extreme caution.**

### Migration Management

Migrations are the safe and versioned way to evolve your database schema.

-   `npm run typeorm:migration:run`: Executes all pending migrations (those that have not yet been applied to the database).
-   `npm run typeorm:migration:show`: Lists all migrations in the project and shows which ones have already been executed.
-   `npm run typeorm:migration:revert`: Reverts the last executed migration.

### File Generation (Scaffolding)

These commands generate base files for entities, migrations, and subscribers. **You must add the path and name of the file to be created after the command, separated by `--`.**

-   `npm run typeorm:entity:create -- <path/EntityName>`
    -   **Function:** Creates a new entity file.
    -   **Example:** `npm run typeorm:entity:create -- src/typeorm/entities/Product`
-   `npm run typeorm:migration:generate -- <path/MigrationName>`
    -   **Function:** **The most important command in the workflow.** It compares the current state of your entities with the database schema and generates a new migration with the differences (the `UP` and `DOWN` queries).
    -   **Example:** `npm run typeorm:migration:generate -- src/typeorm/migrations/AddProductPrice`
-   `npm run typeorm:migration:create -- <path/MigrationName>`
    -   **Function:** Creates an empty migration file, allowing you to write the SQL queries manually.
    -   **Example:** `npm run typeorm:migration:create -- src/typeorm/migrations/SeedInitialData`
-   `npm run typeorm:subscriber:create -- <path/SubscriberName>`
    -   **Function:** Creates a new subscriber file.
    -   **Example:** `npm run typeorm:subscriber:create -- src/typeorm/subscribers/UserSubscriber`

### Other Commands

-   `npm run typeorm:query -- "<YOUR_SQL_QUERY>"`
    -   **Function:** Executes a SQL query directly on the configured database.
-   `npm run typeorm:cache:clear`
    -   **Function:** Clears all data from the query result cache (if the cache is enabled).
-   `npm run typeorm:init`
    -   **Function:** Scaffolds a new TypeORM project, creating the basic directory structure and configuration files. Useful for starting from scratch.
