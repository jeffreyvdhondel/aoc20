import fs from 'fs';

export const importInput = (filePath: string): string[] => {
    return fs.readFileSync(filePath).toString('ascii').split('\n');
};
