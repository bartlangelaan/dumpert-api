'use strict';

const fetch = require('node-fetch');
const API_BASE = 'http://dumpert.nl/mobile_api/json';
const COMMENT_API_BASE = 'https://comments.dumpert.nl/api/v1.0';

/**
 * @typedef {object} DumpertAPIResponse
 * @property {number} gentime - The datetime the response was generated.
 * @property {object} debug - Debug information from the DumpertAPI.
 * @property {boolean} success - Is `true` if the request was a success.
 * @property {DumpertVideo[]} items - All requested Dumpert videos.
 */

/**
 * @typedef {string} VideoID - An Dumpert videoID in the form of `videoid_videosecret`, like `6350_7e370664`
 */

/**
 * @typedef {object} DumpertVideo
 * @property {string} id - A combination of the VideoID and the VideoSecret.
 * @property {string} title - The title of the video
 * @property {string} thumbnail
 * @property {string} still
 * @property {string} description
 * @property {string} date
 * @property {string} tags
 * @property {string} nsfw
 * @property {string} nopreroll
 * @property {object} stats
 * @property {object} stills
 * @property {object} media
 */

/**
 * Returns the top 25 videos of a day.
 * @param {string} day - The day to get the top25 of, like 2017-01-26.
 * @returns {Promise.<DumpertAPIResponse>} - The response from the DumpertAPI.
 */
exports.getDailyTopVideos = (day) => fetch(`${API_BASE}/top5/dag/${day}`).then((res) => res.json());

/**
 * Returns the latest 15 videos uploaded to Dumpert.
 * @param {number} page - The page to get results from.
 * @returns {Promise.<DumpertAPIResponse>} - The response from the DumpertAPI.
 */
exports.getLatest = (page) => fetch(`${API_BASE}/latest/${page}`).then((res) => res.json());

/**
 * @typedef {object} DumpertCommentsAPIResponse
 * @property {DumpertCommentsAPIResponseData} data
 * @property {string} status
 * @property {object} summary
 */

/**
 * @typedef {object} DumpertCommentsAPIResponseData
 * @property {DumpertComment[]} comments
 */

/**
 * @typedef {object} DumpertComment
 * @property {boolean} approved
 * @property {number} article_id
 * @property {string} article_link
 * @property {string} article_title
 * @property {boolean} author_is_newbie
 * @property {string} author_username
 * @property {boolean} banned
 * @property {DumpertComment[]} child_comments
 * @property {string} content
 * @property {string} creation_datetime
 * @property {string} display_content
 * @property {number} id
 * @property {number} kudos_count
 * @property {number} parent_id
 * @property {number} report_count
 */

/**
 * Returns all comments on a video.
 * @param {VideoID} videoID - The video to get the comments from
 * @returns {Promise.<DumpertCommentsAPIResponse>} - The response from the Dumpert Comments API.
 */
exports.getComments = (videoID) =>
    fetch(`${COMMENT_API_BASE}/articles/${videoID.replace('_', '/')}/comments/?includeitems=1`).
        then((res) => res.json());
