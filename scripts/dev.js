const concurrently = require('concurrently')

const log = logs => console.log(logs)

const { result } = concurrently(
	[
		{ command: 'npm run dev:typescript', name: 'ts' },
		{ command: 'npm run dev:next', name: 'next' },
		{ command: 'npm run dev:electron', name: 'electron' },
	],
	{
		killOthers: 'failure',
	},
)
result.then(log, log)
