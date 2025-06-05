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
npm install -g @fregdee/lsx
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
[FILE] 2025-06-05 11:16     492B package.json
[FILE] 2025-06-05 11:16     421B tsconfig.json
[DIR]  2025-06-05 11:25        - src
[FILE] 2025-06-05 11:26    8.5KB package-lock.json
[DIR]  2025-06-05 11:26        - node_modules
[DIR]  2025-06-05 11:26        - dist
```

## Output Format

Each line shows:
- `[TYPE]` - File type (`FILE` or `DIR`)
- Last modified date and time (`YYYY-MM-DD HH:MM`)
- File size (human-readable format, `-` for directories)
- File/directory name

## Requirements

- Node.js ≥ 16.0.0

## License

MIT