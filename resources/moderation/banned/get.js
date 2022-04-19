var api = require("../../api")
var util = require("../../../util")
var creds = require("../../credentials")

/**
 * get({ broadcaster_id, user_id, first, after, before }, credentials)
 * @param {string} broadcaster_id The broadcaster's ID
 * @param {string} user_id The user's ID
 * @param {number} first The number of results to return
 * @param {string} after The cursor to use for pagination
 * @param {string} before The cursor to use for pagination
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires moderation:read
*/

module.exports = async ({ broadcaster_id, user_id, first, after, before }, credentials) => {

    var data = await api.call({
        path: `/moderation/banned${(util.generateQueryString({ broadcaster_id, user_id, first, after, before }))}`,
        method: "GET",
        headers: util.TwitchHeaders(credentials || await creds.get() || {}),
    })

    return data.data || data
}
