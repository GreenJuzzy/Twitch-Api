var api = require("../api")
var util = require("../../util")
var creds = require("../credentials")

/**
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires None
*/

module.exports = async ({ after, before, first, game_id, language, user_id, user_login }, credentials) => {

    var data = await api.call({
        path: `/streams${util.generateQueryString({ after, before, first, game_id, language, user_id, user_login })}`,
        method: "GET",
        headers: util.TwitchHeaders(credentials || await creds.get() || {})
    })

    return data.data || data
}
