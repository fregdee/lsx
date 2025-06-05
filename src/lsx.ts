#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

interface FileInfo {
  name: string;
  type: 'FILE' | 'DIR';
  size: number;
  mtime: Date;
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + sizes[i];
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function getFileInfo(dirPath: string, fileName: string): FileInfo | null {
  try {
    const filePath = path.join(dirPath, fileName);
    const stats = fs.statSync(filePath);
    
    return {
      name: fileName,
      type: stats.isDirectory() ? 'DIR' : 'FILE',
      size: stats.size,
      mtime: stats.mtime
    };
  } catch (error) {
    return null;
  }
}

function listFiles(dirPath: string = '.'): FileInfo[] {
  try {
    const files = fs.readdirSync(dirPath);
    const fileInfos: FileInfo[] = [];
    
    for (const file of files) {
      // Skip hidden files (starting with .)
      if (file.startsWith('.')) {
        continue;
      }
      
      const fileInfo = getFileInfo(dirPath, file);
      if (fileInfo) {
        fileInfos.push(fileInfo);
      }
    }
    
    // Sort by modification time (oldest first)
    fileInfos.sort((a, b) => a.mtime.getTime() - b.mtime.getTime());
    
    return fileInfos;
  } catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
}

function displayFiles(files: FileInfo[]): void {
  for (const file of files) {
    const type = `[${file.type}]`;
    const name = file.name;
    const date = formatDate(file.mtime);
    const size = file.type === 'DIR' ? '-' : formatFileSize(file.size);
    
    console.log(`${type.padEnd(6)} ${date} ${size.padStart(8)} ${name}`);
  }
}

function main(): void {
  const targetDir = process.argv[2] || '.';
  const files = listFiles(targetDir);
  displayFiles(files);
}

if (require.main === module) {
  main();
}