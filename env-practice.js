/*---------------------------TASK-2----------------------------*/
import 'dotenv/config';

const port = process.env.PORT || 3000;
const appName = process.env.APP_NAME || 'DefaultApp';
const debug = process.env.DEBUG === 'true';

console.log('Port:', port);
console.log('App name:', appName);
console.log('Debug mode:', debug);
console.log('All env vars available:', Object.keys(process.env).length);