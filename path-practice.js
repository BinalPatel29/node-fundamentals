/*---------------------------TASK-1----------------------------
import path from 'path';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

console.log('Current file:', _filename);
console.log('Current directory:', _dirname);
console.log('joined path:', path.join(_dirname,'data','notes.json'));
console.log('Extension:', path.extname('notes.js'));
console.log('Basename:', path.basename('/C:/Users/patel/OneDrive/Desktop/Notes App/notes.js'));
console.log('Dirname:', path.dirname('/C:/Users/patel/OneDrive/Desktop/Notes App/notes.js'));
*/

