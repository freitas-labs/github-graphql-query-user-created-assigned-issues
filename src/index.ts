import 'dotenv/config';
import sum from './sum';

console.log(process.env.GITHUB_TOKEN);
console.log(sum(40, 2));
