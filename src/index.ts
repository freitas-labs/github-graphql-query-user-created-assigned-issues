import 'dotenv/config';
import sum from './sum';
import { createdBy, assigneeTo } from './issues';
import { IssueInfo, IssueState } from './data';

console.log(process.env.GITHUB_ACCESS_TOKEN);

createdBy(
	process.env.GITHUB_ACCESS_TOKEN ?? '',
	'freitzzz',
	IssueState.Open
).then((result: IssueInfo[]) => {
	console.log('\n\ncreatedBy');
	console.log('length = ' + result.length);

	for (let index = 0; index < result.length; index++) {
		const element: IssueInfo = result[index];
		console.log(element);
	}
});

assigneeTo(
	process.env.GITHUB_ACCESS_TOKEN ?? '',
	'freitzzz',
	IssueState.Open
).then((result: IssueInfo[]) => {
	console.log('\nassigneeTo');
	console.log('length = ' + result.length);

	for (let index = 0; index < result.length; index++) {
		const element = result[index];
		console.log(element);
	}
});

console.log(sum(40, 2));
