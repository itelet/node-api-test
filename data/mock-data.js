const mockPostResponse = [
	{
		id: 1,
		title: "...",
		headline: "...",
		body: "...",
		created_at: "2023-02-11",
		tags: ["Sports"],
		comments: [
			{
				"id": 1,
				"created_at": "2023-02-13",
				"author": "Test User A",
				"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			},
			{
				"id": 2,
				"created_at": "2023-02-12",
				"author": "Test User B",
				"body": "Etiam tincidunt fermentum felis, quis luctus lectus suscipit nec."
			}
		]
	},
	{
		id: 2,
		title: "...",
		headline: "...",
		body: "...",
		created_at: "2023-02-10",
		tags: ["Business", "Tech"],
		comments: [
			{
				"id": 1,
				"created_at": "2023-02-13",
				"author": "Test User A",
				"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			}
		]
	},
	{
		id: 3,
		title: "...",
		headline: "...",
		body: "...",
		created_at: "2023-02-09",
		tags: ["Economy"],
		comments: [
			{
				"id": 1,
				"created_at": "2023-02-13",
				"author": "Test User A",
				"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			},
			{
				"id": 2,
				"created_at": "2023-02-12",
				"author": "Test User B",
				"body": "Etiam tincidunt fermentum felis, quis luctus lectus suscipit nec."
			}
		]
	},
];

module.exports = { mockPostResponse };