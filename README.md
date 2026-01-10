# Design Patterns

A collection of design patterns implemented in vanilla JavaScript and React.

## Running Examples

### Using npm script (recommended)

```bash
npm run pattern <type>:<pattern>[:<file>]
```

**Examples:**
```bash
# Run the default index.js file in vanilla/proxy
npm run pattern van:proxy

# Run a specific file in vanilla/proxy
npm run pattern van:proxy:validation

# Run React patterns
npm run pattern react:observer
npm run pattern react:observer:hooks
```

### Using the bash script (shorthand)

```bash
./run.sh <type>:<pattern>[:<file>]
```

**Examples:**
```bash
./run.sh van:proxy
./run.sh van:proxy:validation
```

## Type Shortcuts

- `van` → `vanilla`
- `react` → `react`

## Project Structure

```
src/
├── vanilla/
│   ├── proxy/
│   │   ├── index.js         # Default file
│   │   └── validation.js
│   └── [other-patterns]/
└── react/
    └── [patterns]/
```

## Adding New Patterns

1. Create a folder under `src/vanilla/` or `src/react/`
2. Add your pattern files (always include an `index.js` as the default entry point)
3. Run using: `npm run pattern van:<pattern-name>` or `npm run pattern van:<pattern-name>:<file>`

No need to modify `package.json` - the script automatically discovers your files!

