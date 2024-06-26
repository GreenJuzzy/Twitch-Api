var api = require("../api")
var util = require("../../util")
var creds = require("../credentials")

/**
 * mofify({ broadcaster_id, game_id, broadcaster_language, title, delay }, credentials)
 * @param {string} broadcaster_id The broadcaster ID
 * @param {string} game_id The game ID
 * @param {string} broadcaster_language The broadcaster language
 * @param {string} title The title
 * @param {number} delay The delay in seconds
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires channel:manage:broadcast
*/

module.exports = async ({ broadcaster_id, game_id, broadcaster_language, title, delay}, credentials) => {

    var data = await api.call({
        path: `/channels${util.generateQueryString({ "broadcaster_id": broadcaster_id})}`,
        method: "PATCH",
        headers: {
            ...util.TwitchHeaders(credentials || await creds.get() || {}),
            "Content-Type": "application/json"
    },
        body: {
            broadcaster_id,
            game_id,
            broadcaster_language,
            title,
            delay
        },
    })

    if(data?.statusData?.status == 204) return { success: true}

    return data.data || data
}
