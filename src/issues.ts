import { graphql } from '@octokit/graphql';
import { GraphQlQueryResponseData } from '@octokit/graphql/dist-types/types';
import { IssueState } from './data';

export async function createdBy(
	githubToken: string,
	owner: string,
	state: IssueState
): Promise<GraphQlQueryResponseData> {
	const graphqlWithAuth = graphql.defaults({
		headers: {
			authorization: `Bearer ${githubToken}`
		}
	});

	return await graphqlWithAuth(
		`
	    query {
	        search(first: 10, type: ISSUE, query: "type:issue is:public author:${owner} ${state}") {
	          issueCount
	          pageInfo {
	            hasNextPage
	            endCursor
	          }
	          edges {
	            node {
	              ... on Issue {
	                createdAt
	                title
	                url,
	                repository {
	                  name
	                }
	              }
	            }
	          }
	        }
	      }
	    `
	);
}
