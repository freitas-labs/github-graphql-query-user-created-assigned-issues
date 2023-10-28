import 'dotenv/config';
import { createdBy, assigneeTo } from './issues';
import { IssueInfo, IssueState } from './data';

async function getAllIssues(user: string): Promise<IssueInfo[]> {
	const createdByResult: IssueInfo[] = await createdBy(
		process.env.GITHUB_ACCESS_TOKEN ?? '',
		user,
		IssueState.Open
	);

	const assigneeToResult: IssueInfo[] = await assigneeTo(
		process.env.GITHUB_ACCESS_TOKEN ?? '',
		user,
		IssueState.Open
	);

	console.log(`createdBy => ${createdByResult.length}`);
	console.log(`assigneeTo => ${assigneeToResult.length}`);

	return createdByResult.concat(assigneeToResult);
}

getAllIssues('freitzzz').then((result) => {
	console.log(`getAllIssues => ${result.length}`);
	for (let index = 0; index < result.length; index++) {
		const element = result[index];
		console.log(element);
	}
});
