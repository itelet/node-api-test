const mockPostResponse = [
	{
		id: 1,
		title: "WCC 2023",
		headline: "Ding Liren wins the World Chess Championship",
		body: "Ding Liren has won the World Chess Championship for the first time in his career. The Chinese grandmaster defeated the reigning champion  Ian Nepomniachtchi in a thrilling final match that took place in Astana, Kazakhstan. Liren's victory is a historic moment for Chinese chess, as he becomes the first player from China to win the prestigious tournament. The World Chess Championship is the most prestigious event in the chess world, and Liren's win is a testament to his skill and talent. The chess community has praised Liren's performance and is looking forward to seeing what he will achieve in the future.",
		created_at: "2023-04-30",
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
		"id": 2,
		"title": "The Great GitLab Data Disaster",
		"headline": "One Developer's Accidental Delete That Almost Wiped Out Years of Data",
		"body": "In 2017, GitLab, a popular source code management platform, experienced one of the most dramatic data loss incidents in recent history. It all began when a developer, in a routine cleanup operation, accidentally ran a command that deleted an entire database containing over 300GB of critical data. The mistake happened during a deployment, and the poor developer, unaware of the consequences, proceeded to trigger the deletion on a production server. What followed was an absolute scramble as the GitLab team realized their backup systems weren't as reliable as they thought. The developer became the unintentional hero when, after frantically working with their team, they managed to restore most of the lost data—but not all. The incident became a perfect example of why you should always, always double-check before you hit 'enter' in production. Moral of the story: 'Git' better backups! (And maybe test your commands a little more carefully next time.)",
		"created_at": "2023-01-31",
		"tags": ["Business", "Tech"],
		"comments": [
			{
				"id": 1,
				"created_at": "2023-02-13",
				"author": "Test User A",
				"body": "Note to self: Always back up your data... especially if you're about to do something that sounds like it came straight from a hacker movie."
			}
		]
	},	
	{
		"id": 3,
		"title": "Five Years Later: A COVID-19 Retrospective",
		"headline": "Remember When 'Two Weeks to Flatten the Curve' Turned Into 5 Years of Zoom Calls?",
		"body": "Can you believe it's been five years since the world went into lockdown? 2020 was supposed to be the year of clear vision, but instead, we were all just trying to see through the endless stream of pandemic updates. At the time, we were promised that we'd be back to normal in just two weeks... and here we are, still Zooming, still working from home, and still debating whether 'quarantine snacks' are a reasonable way to deal with stress. For those who had never heard of 'social distancing' or 'contactless delivery' before, these phrases quickly became part of our daily lexicon. And who could forget the endless memes about the toilet paper shortage or how we all became sourdough bread experts overnight? But on a serious note, five years later, we're still feeling the effects. Some things have changed for the better, while others remain eerily similar. Here's to hoping we never again see the words 'pandemic' and 'quarantine' trending at the same time. The only thing we’ve learned for sure is: no matter what happens, never, *ever* run out of toilet paper.",
		"created_at": "2023-02-09",
		"tags": ["Economy", "COVID-19"],
		"comments": [
			{
				"id": 1,
				"created_at": "2023-02-13",
				"author": "Test User A",
				"body": "The fact that 'Zoom fatigue' is still a thing 5 years later is truly a testament to how much we all didn't expect to still be online for work. Maybe it's time to bring back in-person meetings—just kidding."
			},
			{
				"id": 2,
				"created_at": "2023-02-12",
				"author": "Test User B",
				"body": "I still can't believe we spent months arguing over whether to wear masks. Looking back, it feels like a surreal fever dream. But at least we survived—thanks, Zoom, and sourdough bread!"
			}
		]
	}	
];

module.exports = { mockPostResponse };