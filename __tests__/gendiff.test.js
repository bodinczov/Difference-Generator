import path from 'path';
import parser from '../src/parser.js';
import compare from '../src/compare.js';

const file1Path = path.resolve('__fixtures__/file1.json');
const file2Path = path.resolve('__fixtures__/file2.json');

test('genDiff compares two JSON files correctly', () => {
  const expectedDiff = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  const parsedFile1 = parser(file1Path);
  const parsedFile2 = parser(file2Path);
  const diff = compare(parsedFile1, parsedFile2);
  
  expect(diff).toBe(expectedDiff);
});

test('should compare two YAML files', () => {
  const parsedFile1 = parser('__fixtures__/file1.yml');
  const parsedFile2 = parser('__fixtures__/file2.yml');
  const result = compare(parsedFile1, parsedFile2);

  expect(result).toBe(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});
