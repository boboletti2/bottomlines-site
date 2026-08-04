import fs from 'fs';
import { globSync } from 'glob';
import * as babel from '@babel/core';
import prettier from 'prettier';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const files = globSync('{src,.}/**/*.{ts,tsx}', { 
    cwd: __dirname, 
    absolute: true,
    ignore: ['node_modules/**']
  });

  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const code = fs.readFileSync(file, 'utf8');
    const isTSX = file.endsWith('.tsx');
    try {
      const result = babel.transformSync(code, {
        filename: file,
        plugins: [
          '@babel/plugin-syntax-jsx',
          ['@babel/plugin-transform-typescript', { isTSX, allExtensions: true }]
        ],
        retainLines: true,
      });

      if (result && result.code != null) {
        let formatted = result.code;
        try {
          formatted = await prettier.format(result.code, { parser: 'babel' });
        } catch (prettierErr) {
          console.warn(`Prettier failed on ${file}, saving unformatted.`);
        }
        
        const newExt = isTSX ? '.jsx' : '.js';
        const newFile = file.replace(/\.tsx?$/, newExt);
        fs.writeFileSync(newFile, formatted);
        if (newFile !== file) {
          fs.unlinkSync(file);
        }
        console.log(`Converted ${path.relative(__dirname, file)} -> ${path.relative(__dirname, newFile)}`);
      }
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }
}

run();
