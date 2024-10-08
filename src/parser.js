import { readFileSync } from 'fs';

const parser = (path) => {
    const data = readFileSync(path, 'utf-8');
    try {
        return JSON.parse(data);
    } catch (err) {
        console.log(`Cathed error: ${err}`);
        return null;
    }
}

export default parser;
