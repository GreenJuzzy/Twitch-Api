var api = require("../../api")
var util = require("../../../util")
var creds = require("../../credentials")

/**
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires user:read:broadcast
*/

module.exports = async ({ user_id, video_id, after, before, first}, credentials) => {

    var data = await api.call({
        path: `/streams/markers${util.generateQueryString({ user_id, video_id, after, before, first})}`,
        method: "GET",
        headers: util.TwitchHeaders(credentials || await creds.get() || {})
    })

    return data.data || data
}
