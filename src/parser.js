import { readFileSync } from 'fs';
import yaml from 'js-yaml';

const parseJson = (data) => JSON.parse(data);
const parseYaml = (data) => yaml.load(data);

const parser = (path) => {
  const data = readFileSync(path, 'utf-8');
  const extension = path.split('.').pop();

  switch (extension) {
    case 'json':
      return parseJson(data);
    case 'yml':
    case 'yaml':
      return parseYaml(data);
    default:
      throw new Error(`Unsupported file type: ${extension}`);
  }
};

export default parser;
