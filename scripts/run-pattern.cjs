#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Get arguments from command line
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Usage: npm run pattern <type>:<pattern>[:<file>]');
  console.error('Example: npm run pattern van:proxy:validation');
  console.error('\nShorthand types:');
  console.error('  van  -> vanilla');
  console.error('  react -> react');
  process.exit(1);
}

// Parse the pattern: type:pattern[:file]
const parts = args[0].split(':');

if (parts.length < 2) {
  console.error('Usage: npm run pattern <type>:<pattern>[:<file>]');
  console.error('Example: npm run pattern van:proxy:validation');
  process.exit(1);
}

const typeMap = {
  'van': 'vanilla',
  'react': 'react'
};

const type = typeMap[parts[0]] || parts[0];
const pattern = parts[1];
const file = parts[2];

// Determine the base path
const basePath = path.join(__dirname, '..', 'src', type, pattern);

// Determine the file to run
let filePath;
if (file) {
  // If file is specified, try with .js extension if not present
  const fileName = file.endsWith('.js') ? file : `${file}.js`;
  filePath = path.join(basePath, fileName);
} else {
  // Default to index.js
  filePath = path.join(basePath, 'index.js');
}

// Check if file exists
if (!fs.existsSync(filePath)) {
  console.error(`Error: File not found: ${filePath}`);
  console.error(`\nAvailable files in ${basePath}:`);
  
  if (fs.existsSync(basePath)) {
    const files = fs.readdirSync(basePath).filter(f => f.endsWith('.js'));
    if (files.length > 0) {
      files.forEach(f => console.error(`  - ${f.replace('.js', '')}`));
    } else {
      console.error(`  No .js files found`);
    }
  } else {
    console.error(`  Directory does not exist`);
  }
  
  process.exit(1);
}

// Run the file
console.log(`Running: ${filePath}\n`);
try {
  execSync(`node "${filePath}"`, { stdio: 'inherit' });
} catch (error) {
  process.exit(error.status || 1);
}
