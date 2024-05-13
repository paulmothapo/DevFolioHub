# Portfolio Database Operations README

This README provides guidance on working with the "Portfolio" PostgreSQL database table for CRUD operations.

## Table of Contents

- [Connecting to the Database](#connecting-to-the-database)
- [CRUD Operations](#crud-operations)
  - [Create (INSERT)](#create-insert)
  - [Read (SELECT)](#read-select)
  - [Update (UPDATE)](#update-update)
  - [Delete (DELETE)](#delete-delete)

## Connecting to the Database

To connect to the PostgreSQL database, we use DBeaver.

Example connection information:
- **Host**: localhost (or the hostname of our database server)
- **Port**: 5432 (default PostgreSQL port)
- **Username**: _username
- **Password**: _password
- **Database**: _database_name

## CRUD Operations

### Create (INSERT)

To insert a new portfolio entry into the "Portfolio" table, use the `INSERT INTO` statement. Here's an example:

```sql
INSERT INTO "Portfolio" (name, description, website, technologies, thumbnail)
VALUES ('Portfolio Name', 'Portfolio Description', 'https://example.com', '{Technology1, Technology2}', 'thumbnail_url');
```

### Read (SELECT)

To retrieve portfolio entries from the "Portfolio" table, use the `SELECT` statement. Here's an example:

```sql
SELECT * FROM "Portfolio";
```

### Update (UPDATE)

To update an existing portfolio entry in the "Portfolio" table, use the `UPDATE` statement. Here's an example:

```sql
UPDATE "Portfolio"
SET name = 'New Portfolio Name', description = 'New Portfolio Description'
WHERE id = 1;
```

### Delete (DELETE)

To delete a portfolio entry from the "Portfolio" table, use the `DELETE` statement. Here's an example:

```sql
DELETE FROM "Portfolio"
WHERE id = 1;
```

Replace placeholders (e.g., `your_username`, `your_password`, `your_database_name`) with actual connection details, and customize queries with specific data as needed.

---

