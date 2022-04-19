var api = require("../api")
var util = require("../../util")
var creds = require("../credentials")

/**
 * unban({ broadcaster_id, moderator_id, user_id }, credentials)
 * @param {string} broadcaster_id The broadcaster's ID
 * @param {string} moderator_id The moderator's ID
 * @param {string} user_id The user's ID
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires Scope `None`
*/

module.exports = async ({ broadcaster_id, moderator_id, user_id }, credentials) => {

    var data = await api.call({
        path: `/moderation/bans${(util.generateQueryString({ broadcaster_id, moderator_id, user_id }))}`,
        method: "DELETE",
        headers: util.TwitchHeaders(credentials || await creds.get() || {}),
    })

    return data.data || data
}
