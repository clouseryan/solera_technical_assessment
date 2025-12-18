# System Prompt - Solera Technical Assessment

## Project Overview
This is the backend API for the Solera Technical Assessment, built with ASP.NET Core 9.0 and MS SQL Server 2022.

## Database Migrations

This project uses **DbUp** for managing database migrations.

### How DbUp Works
- DbUp is a .NET library that runs SQL scripts against your database
- Scripts are executed in order and tracked to ensure they only run once
- Migration scripts are embedded resources in the assembly
- Migrations run automatically on application startup

### Adding New Migrations

1. Create a new SQL file in the `SoleraTechAssesment.Data.DataAccess/Database/Scripts/` folder
2. Name your script with a numeric prefix to ensure proper ordering:
   - Example: `001_CreateUsersTable.sql`
   - Example: `002_AddEmailColumnToUsers.sql`
   - Example: `003_CreateOrdersTable.sql`

3. The script will automatically be included as an embedded resource (configured in the .csproj file)
4. On next application startup, DbUp will detect and run any new scripts

### Migration Script Guidelines
- Use descriptive names that explain what the migration does
- Include both forward changes and any necessary data migrations
- Scripts should be idempotent where possible
- Always test migrations locally before committing

### Connection String
The default connection string is configured in `appsettings.json`:
```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=SoleraTechAssessment;Trusted_Connection=True;TrustServerCertificate=True;"
}
```

Update this connection string for your local SQL Server 2022 instance.

### DbUp Configuration
DbUp is configured in `Program.cs` and runs before the application starts:
- Automatically creates the database if it doesn't exist
- Runs all pending migration scripts in order
- Logs migration progress to the console
- Fails application startup if migrations fail

