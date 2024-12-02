// @ts-check

import fs from 'fs';
import Parser from 'rss-parser';
import { TwitterApi } from 'twitter-api-v2';

/**
 * @typedef {Parser.Output<{}>} RssData
 */

const parser = new Parser();

const argv = process.argv;
if (argv.length < 4) {
  console.log('Usage: node twitter.js <OLD_RSS> <NEW_RSS>');
  process.exit(1);
}
const oldRssPath = argv[2];
const newRssPath = argv[3];

const oldRss = await parseRss(oldRssPath);
const newRss = await parseRss(newRssPath);
const newEntries = getNewEntries(oldRss, newRss);

if (newEntries.length > 0) {
  const client = new TwitterApi(getApiTokens());

  for (const entry of newEntries) {
    const status = `${entry.title} ${entry.link}`;
    await client.v2.tweet(status);
    console.log('Posted to Twitter:', status);
  }

  console.log(`Posted ${newEntries.length} new entries to Twitter.`);
} else {
  console.log('No new entries found.');
}

/**
 * Read and parse an RSS file.
 * @param {string} filePath - The path to the RSS file.
 * @returns {Promise<RssData>} The parsed RSS data.
 */
async function parseRss(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  return await parser.parseString(data);
}

/**
 * Calculate the difference between old and new RSS entries.
 * @param {RssData} oldRss - The old RSS data.
 * @param {RssData} newRss - The new RSS data.
 * @returns {Parser.Item[]} The new RSS entries.
 */
function getNewEntries(oldRss, newRss) {
  const oldEntries = new Set(oldRss.items.map((item) => item.link));
  return newRss.items.filter((item) => !oldEntries.has(item.link));
}

/**
 * Get Twitter API tokens from environment variables.
 * @returns {import('twitter-api-v2').TwitterApiTokens} Twitter API tokens.
 * @throws {Error} If any of the tokens are missing.
 */
function getApiTokens() {
  const appKey = process.env.TWITTER_APIKEY;
  const appSecret = process.env.TWITTER_APIKEY_SECRET;
  const accessToken = process.env.TWITTER_ACCESS_TOKEN;
  const accessSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;

  if (!appKey || !appSecret || !accessToken || !accessSecret) {
    throw new Error('Twitter API tokens are missing.');
  }

  return { appKey, appSecret, accessToken, accessSecret };
}
