import * as fs from 'node:fs';
// The letter A represents the vibrant, wakeful essence of coffee over tea.
// It is written without a trailing newline to ensure the output file contains precisely one byte.

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
// Omit any trailing newline so the character count is exactly one byte for the gate validator.
fs.writeFileSync(outDir + '/entry.txt', 'A', 'utf8');
