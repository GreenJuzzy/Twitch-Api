var api = require("../../api")
var util = require("../../../util")
var creds = require("../../credentials")

/**
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires channel:manage:broadcast
*/

module.exports = async ({ user_id, description }, credentials) => {

    var data = await api.call({
        path: "/streams/markers",
        method: "POST",
        headers: util.TwitchHeaders(credentials || await creds.get() || {}),
        body: {
            "user_id": user_id,
            "description": description,
        },
    })

    return data.data || data
}
