const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const sourceDir = 'D:\\Full Stack\\2025 Recap\\portfolio\\portfolio-lovable\\src';
const targetDir = 'd:\\Full Stack\\2025 Recap\\portfolio\\portfolio-website\\src';

const dirsToCopy = ['components', 'hooks', 'lib', 'data'];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function processFile(filePath, targetPath) {
  const ext = path.extname(filePath);
  
  if (ext === '.tsx' || ext === '.ts') {
    const code = fs.readFileSync(filePath, 'utf-8');
    
    try {
      const result = babel.transformSync(code, {
        filename: filePath,
        presets: [
          ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
          ['@babel/preset-react', { runtime: 'automatic' }]
        ],
        retainLines: true,
      });

      const newExt = ext === '.tsx' ? '.jsx' : '.js';
      const newTargetPath = targetPath.replace(ext, newExt);
      fs.writeFileSync(newTargetPath, result.code);
      console.log(`Converted: ${filePath} -> ${newTargetPath}`);
    } catch (e) {
      console.error(`Failed to convert ${filePath}:`, e);
      // Fallback: just copy and rename if it fails
      const newExt = ext === '.tsx' ? '.jsx' : '.js';
      const newTargetPath = targetPath.replace(ext, newExt);
      fs.writeFileSync(newTargetPath, code);
    }
  } else if (ext !== '.css') {
    // Just copy other files (except css as we'll handle it separately)
    fs.copyFileSync(filePath, targetPath);
    console.log(`Copied: ${filePath}`);
  }
}

function walkDir(currentPath, currentTarget) {
  if (!fs.existsSync(currentPath)) return;
  
  ensureDir(currentTarget);
  
  const files = fs.readdirSync(currentPath);
  for (const file of files) {
    const fullPath = path.join(currentPath, file);
    const fullTarget = path.join(currentTarget, file);
    
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, fullTarget);
    } else {
      processFile(fullPath, fullTarget);
    }
  }
}

dirsToCopy.forEach(dir => {
  const src = path.join(sourceDir, dir);
  const dest = path.join(targetDir, dir);
  walkDir(src, dest);
});
console.log("Conversion complete.");
