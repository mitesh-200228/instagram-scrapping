import { ApifyClient } from 'apify-client';

// Initialize the ApifyClient with API token
const client = new ApifyClient({
    // token: 'apify_api_hnBwvks1PxUI2j0YMOY3cNPdRBfZ6E26lRrJ',
    token: '<YOUR_APIFY_API_TOKEN>'
});

// Prepare actor input
const input = {
    "username": [
        "<USERNAME>"
    ],
    "resultsLimit": 20
};
console.log(input);
(async () => {
    // Run the actor and wait for it to finish
    const run = await client.actor("zuzka/instagram-post-scraper").call(input);
    console.log(run);
    // Fetch and print actor results from the run's dataset (if any)
    console.log('Results from dataset');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    items.forEach((item) => {
        console.dir(item);
    });
})();
