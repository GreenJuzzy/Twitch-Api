var api = require("../api")
var util = require("../../util")
var index = require("../../index")

/**
 * @param {string} broadcaster_id The broadcaster ID
 * @param {string} game_id The game ID
 * @param {string} broadcaster_language The broadcaster language
 * @param {string} title The title
 * @param {number} delay The delay in seconds
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires Scope `channel:manage:broadcast`
*/

module.exports = async ({ broadcaster_id, game_id, broadcaster_language, title, delay}, credentials) => {

    var data = await api.call({
        path: `/channels?${util.generateQueryString()}`,
        method: "PATCH",
        headers: util.TwitchHeaders(credentials || index.credentials || {}),
        body: {
            "game_id": game_id,
            "broadcaster_language": broadcaster_language,
            "title": title,
            "delay": delay
        },
    })

    return data.data || data
}
