import 'dotenv/config';
import sum from './sum';
import { createdBy } from './issues';
import { GraphQlQueryResponseData } from '@octokit/graphql/dist-types/types';
import { IssueInfo, IssueState } from './data';

console.log(process.env.GITHUB_ACCESS_TOKEN);

createdBy(
	process.env.GITHUB_ACCESS_TOKEN ?? '',
	'freitzzz',
	IssueState.Open
).then((result: GraphQlQueryResponseData) => {
	console.log('\n\ncreatedBy');
	console.log(result);

	const edges = result.search?.edges;
	for (let index = 0; index < edges.length; index++) {
		const element = edges[index] as IssueInfo;
		console.log(element);
	}
});

console.log(sum(40, 2));
