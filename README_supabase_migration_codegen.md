# Supabase Migration Codegen

This tool automates the process of generating TypeScript type definitions from Supabase database migrations and integrating them into your codebase. It handles the entire workflow from analyzing migrations to committing the changes to GitHub.

## Features

- Analyzes SQL migration files to understand schema changes
- Generates TypeScript types based on the updated schema
- Intelligently integrates new types with your existing codebase
- Validates changes by building and testing the project
- Creates and pushes a commit to GitHub with the updated types
- Provides detailed reporting of each step in the process

## Prerequisites

- Python 3.8+
- Access to a Supabase MCP server
- Access to a GitHub MCP server
- Valid credentials for both services

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd supabase-migration-codegen
   ```

2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Usage

### Basic Usage

Run the script with the required arguments:

```bash
python supabase_migration_codegen.py \
  --owner your-github-username \
  --repo your-repository-name \
  --branch feature/update-types \
  --project-path ./path/to/project \
  --migration-file ./path/to/migration.sql
```

### Command Line Options

| Option | Required | Description |
|--------|----------|-------------|
| `--owner` | Yes | GitHub repository owner |
| `--repo` | Yes | GitHub repository name |
| `--branch` | Yes | Branch name for the changes |
| `--project-path` | Yes | Path to the project within the repository |
| `--migration-file` | Yes | Path to the migration SQL file |
| `--skip-tests` | No | Skip build and test validation |
| `--dry-run` | No | Don't actually commit to GitHub |

### Advanced Usage

#### Dry Run Mode

To see what changes would be made without actually committing to GitHub:

```bash
python supabase_migration_codegen.py \
  --owner your-github-username \
  --repo your-repository-name \
  --branch feature/update-types \
  --project-path ./path/to/project \
  --migration-file ./path/to/migration.sql \
  --dry-run
```

#### Skip Tests

If you want to skip the build and test validation step:

```bash
python supabase_migration_codegen.py \
  --owner your-github-username \
  --repo your-repository-name \
  --branch feature/update-types \
  --project-path ./path/to/project \
  --migration-file ./path/to/migration.sql \
  --skip-tests
```

## Workflow Steps

1. **Analyze Migration**: The tool analyzes the provided SQL migration file to understand the schema changes.

2. **Generate Types**: Based on the migration analysis, TypeScript types are generated for the updated schema.

3. **Integrate Types**: The new types are intelligently integrated with your existing codebase, following your project's conventions.

4. **Validate Changes**: The tool builds the project and runs tests to ensure everything works correctly with the new types.

5. **Commit Changes**: Changes are committed to the specified branch with a descriptive message and pushed to GitHub.

## Output

The tool provides detailed console output for each step of the process. Additionally, upon successful completion, a JSON file containing the full results is saved to the current directory.

## Error Handling

If any step fails, the tool will provide detailed error information and suggestions for how to resolve the issue. In case of validation failures, you can fix the issues manually and then re-run the tool with the same parameters.

## Security Notes

- The tool requires access to your GitHub repository and Supabase schema
- No sensitive information is stored by the tool
- All operations are performed through the MCP servers

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
