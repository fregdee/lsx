# lsx

Enhanced `ls` command with better file and directory visibility.

## Features

- 📁 Clear file type indicators: `[FILE]` and `[DIR]`
- 📅 Sorted by modification time (oldest first)
- 📏 Human-readable file sizes (KB, MB, GB)
- 🔍 Clean, easy-to-read output format
- 👁️ Excludes hidden files by default

## Installation

```bash
npm install -g lsx
```

## Usage

```bash
# List current directory
lsx

# List specific directory
lsx /path/to/directory
```

## Example Output

```
[FILE] package.json         2025-06-05 11:16     492B
[FILE] tsconfig.json        2025-06-05 11:16     421B
[DIR]  src                  2025-06-05 11:25        -
[FILE] package-lock.json    2025-06-05 11:26    8.5KB
[DIR]  node_modules         2025-06-05 11:26        -
[DIR]  dist                 2025-06-05 11:26        -
```

## Output Format

Each line shows:
- `[TYPE]` - File type (`FILE` or `DIR`)
- File/directory name
- Last modified date and time (`YYYY-MM-DD HH:MM`)
- File size (human-readable format, `-` for directories)

## Requirements

- Node.js ≥ 16.0.0

## License

MIT